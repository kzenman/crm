import frappe
from frappe.utils import (
    add_days,
    now_datetime,
    get_datetime,
    pretty_date,
    get_link_to_form,
    get_url, 
    escape_html
)

DIRECTOR_TITLE = "Managing Director"
MANAGER_TITLE  = "Sales Manager"
REP_TITLE      = "Sales Representative"

def execute(filters=None):
    filters = frappe._dict(filters or {})
    days = int(filters.get("days") or 7)
    director = filters.get("director")

    # pick any active MD if none provided
    if not director:
        director = frappe.db.get_value("Employee",
            {"designation": DIRECTOR_TITLE, "status": "Active"}, "name")
        if not director:
            return _columns(), []

    md = frappe.get_doc("Employee", director)

    # managers under this MD
    managers = frappe.get_all("Employee",
        filters={"designation": MANAGER_TITLE, "status": "Active", "reports_to": md.name},
        fields=["name","employee_name","user_id","reports_to"])
    mgr_names = [m["name"] for m in managers]

    # reps under those managers
    reps = []
    if mgr_names:
        reps = frappe.get_all("Employee",
            filters={"designation": REP_TITLE, "status": "Active", "reports_to": ["in", mgr_names]},
            fields=["name","employee_name","user_id","reports_to"])

    reps_by_user = {r["user_id"]: r for r in reps if r.get("user_id")}
    rep_users = list(reps_by_user.keys())

    # headers
    data = []
    data.append({"section":"Managing Director","manager":md.name,
                 "manager_name":md.employee_name,"designation":md.designation})
    data.append({"section":f"Sales Managers reporting to {md.employee_name}"})
    for m in managers:
        data.append({"section":"", "manager":m["name"], "manager_name":m["employee_name"],
                     "designation":MANAGER_TITLE})

    if not rep_users:
        data.append({"section":"", "note":"No Sales Representatives mapped under these managers."})
        return _columns(), data

    # latest transition per (lead, owner) within lookback; pair prev.from -> curr.from
    since_ts = add_days(now_datetime(), -days)
    placeholders = ", ".join(["%s"] * len(rep_users))
    rows = frappe.db.sql(f"""
        WITH base AS (
          SELECT
            c.parent AS lead,
            l.lead_owner AS owner_user,
            COALESCE(NULLIF(CONCAT_WS(' ', l.first_name, l.last_name), ''), l.lead_name, l.name) AS lead_name,
            c.`from` AS curr_from,
            COALESCE(c.to_date, c.from_date, c.creation) AS curr_time,
            LAG(c.`from`) OVER (
              PARTITION BY c.parent, l.lead_owner
              ORDER BY COALESCE(c.to_date, c.from_date, c.creation)
            ) AS prev_from
          FROM `tabCRM Status Change Log` c
          JOIN `tabCRM Lead` l ON l.name = c.parent
          WHERE l.lead_owner IN ({placeholders})
        ),
        filtered AS (
          SELECT
            lead, owner_user, lead_name, curr_from, curr_time, prev_from,
            ROW_NUMBER() OVER (PARTITION BY lead, owner_user ORDER BY curr_time DESC) AS rn
          FROM base
          WHERE curr_time >= %s
        )
        SELECT lead, owner_user, lead_name, curr_from, curr_time, prev_from
        FROM filtered
        WHERE rn = 1
        ORDER BY owner_user, lead, curr_time DESC
    """, rep_users + [since_ts], as_dict=True)

    # body per manager
    for m in managers:
        data.append({"section": f"Manager: {m['employee_name']} ({m['name']})"})
        mgr_rep_users = {r["user_id"] for r in reps if r.get("reports_to")==m["name"] and r.get("user_id")}
        found = False

        for r in rows:
            if r["owner_user"] not in mgr_rep_users: continue
            if not r.get("prev_from"): continue

            # safe rep lookup
            rep_row = reps_by_user.get(r["owner_user"])    # may be None
            rep_doc = rep_row["name"] if rep_row else None
            rep_label = (rep_row.get("employee_name") if rep_row and rep_row.get("employee_name") else r["owner_user"])
            rep_html = get_link_to_form("Employee", rep_doc, rep_label) if rep_doc else rep_label

            # lead link (always clickable)
            lead_label = r.get("lead_name") or r["lead"]
            lead_url   = get_url(f"/crm/leads/{r['lead']}")
            lead_html  = f'<a href="{lead_url}">{escape_html(lead_label)}</a>'
#             lead_html  = get_link_to_form("CRM Lead", r["lead"], lead_label)

            data.append({
                "section": "",
                "manager": m["name"],
                "manager_name": m["employee_name"],
                # keep raw ids if you ever need them (not displayed)
                "rep": rep_doc,
                "rep_name": rep_html,           # HTML (clickable)
                "lead": lead_html,              # HTML (clickable)
                "from_status": r["prev_from"],
                "to_status": r["curr_from"],
                "when": pretty_date(get_datetime(r["curr_time"])) if r.get("curr_time") else None,
            })
            found = True

        if not found:
            data.append({"section":"", "note": f"No status changes in last {days} days."})

    return _columns(), data



#  "from_when": pretty_date(r["prev_time"]) if r.get("prev_time") else None,
def _columns():
    return [
        {"label": "Section",      "fieldname": "section",      "fieldtype": "Data",    "width": 300},
        {"label": "Manager",      "fieldname": "manager",      "fieldtype": "Link",    "options": "Employee", "width": 140},
        {"label": "Manager Name", "fieldname": "manager_name", "fieldtype": "Data",    "width": 180},
        {"label": "Designation",  "fieldname": "designation",  "fieldtype": "Data",    "width": 140},
#         {"label": "Rep",          "fieldname": "rep",          "fieldtype": "Link",    "options": "Employee", "width": 140},
        {"label": "Rep Name",     "fieldname": "rep_name",     "fieldtype": "Data",    "width": 180},
        {"label": "Seed",         "fieldname": "lead",         "fieldtype": "Link",    "options": "CRM Lead", "width": 180},
        {"label": "From",         "fieldname": "from_status",  "fieldtype": "Data",    "width": 160},
        {"label": "To",           "fieldname": "to_status",    "fieldtype": "Data",    "width": 160},
#         {"label": "When",         "fieldname": "when",         "fieldtype": "Data",    "width": 140},
        {"label": "Note",         "fieldname": "note",         "fieldtype": "Data",    "width": 280},
        # If you enabled 'from_when' above, add this column:
#         {"label": "From When",    "fieldname": "from_when",     "fieldtype": "Data",    "width": 140},
    ]
