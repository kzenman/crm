/* global frappe */
/* global frappe */
frappe.query_reports["Director Sales Team"] = {
  filters: [
    {
      fieldname: "director",
      label: "Managing Director",
      fieldtype: "Link",
      options: "Employee",
      reqd: 1,
      get_query: () => ({ filters: { designation: "Managing Director", status: "Active" } }),
      on_change: () => frappe.query_report.refresh()
    },
    {
      fieldname: "days",
      label: "Days (lookback)",
      fieldtype: "Int",
      default: 7,
      on_change: () => frappe.query_report.refresh()
    }
  ],
  formatter(value, row, column, data, default_formatter) {
    // 1) If server already sent HTML, return it as-is (don’t let default escape it)
    if ((column.fieldname === "lead" || column.fieldname === "rep_name")
        && typeof value === "string"
        && value.trim().startsWith("<a ")) {
      return value;
    }

    // 2) Otherwise, build the link on the fly for Desk (uses hidden docnames)
    if (column.fieldname === "lead" && data && data.lead_doc) {
      const label = value || data.lead_doc;
      return `<a href="/crm/leads/${encodeURIComponent(data.lead_doc)}">${frappe.utils.escape_html(label)}</a>`;
    }
    if (column.fieldname === "rep_name" && data && data.rep) {
      const label = value || data.rep;
      return `<a href="/crm/leads/${encodeURIComponent(data.rep)}">${frappe.utils.escape_html(label)}</a>`;
    }

    // default formatting for other columns
    return default_formatter(value, row, column, data);
  }

};


