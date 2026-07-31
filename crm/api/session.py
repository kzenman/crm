import frappe


@frappe.whitelist()
def get_users():
# 	print("🔥 get_users() called!")
	excluded = ["admin@tecc1.com", "brg@modern-bd.com", 'Guest']

	User = frappe.qb.DocType("User")
	
	users = (
		frappe.qb.from_(User)
		.select(
			User.name,
			User.email,
			User.enabled,
			User.user_image,
			User.first_name,
			User.last_name,
			User.full_name,
			User.user_type,
		)
		.where(User.name.notin(excluded))
		.orderby(User.full_name)
		.distinct()
	).run(as_dict=True)

	for user in users:
	
		if frappe.session.user == user.name:
			user.session_user = True

		user.roles = frappe.get_roles(user.name)

		user.role = ""

		if "System Manager" in user.roles:
			user.role = "System Manager"
		elif "Sales Manager" in user.roles:
			user.role = "Sales Manager"
		elif "Sales User" in user.roles:
			user.role = "Sales User"
		elif "Director" in user.roles:
			user.role = "Director"

		if frappe.session.user == user.name:
			user.session_user = True

		user.is_telephony_agent = frappe.db.exists("CRM Telephony Agent", {"user": user.name})

	crm_users = []

	# crm users are users with role Sales User or Sales Manager
	for user in users:
# 		if "Sales User" in user.roles or "Sales Manager" in user.roles:
		if any(role in user.roles for role in ["Sales User", "Sales Manager", "Director"]):
			crm_users.append(user)

	return users


@frappe.whitelist()
def get_organizations():
	organizations = frappe.qb.get_query(
		"CRM Organization",
		fields=["*"],
		order_by="name asc",
		distinct=True,
	).run(as_dict=1)

	return organizations


@frappe.whitelist()
def get_company_users():
	"""Get users from the same company as the current user."""
	current_user = frappe.session.user
	
	# Get the current user's companies from User Permission
	current_user_companies = frappe.get_all(
		"User Permission",
		filters={
			"user": current_user,
			"allow": "Company"
		},
		pluck="for_value"
	)
	
	if not current_user_companies:
		# If user has no company permissions, return empty list
		return []
	
	# Get all users who have permission to the same companies
	company_users = frappe.get_all(
		"User Permission",
		filters={
			"allow": "Company",
			"for_value": ["in", current_user_companies]
		},
		pluck="user"
	)
	
	# Remove duplicates and get unique users
	unique_users = list(set(company_users))
	
	if not unique_users:
		return []
	
	# Get user details for these users
	users = frappe.get_all(
		"User",
		filters={
			"name": ["in", unique_users],
			"enabled": 1,
			"user_type": "System User"
		},
		fields=[
			"name",
			"email",
			"user_image",
			"first_name",
			"last_name",
			"full_name"
		],
		order_by="full_name asc"
	)
	
	return users


@frappe.whitelist()
def get_company_employees():
	"""Get employees from the same company as the current user, ignoring user permissions."""
	current_user = frappe.session.user
	
	# First, get the current user's employee record to find their company
	current_employee = frappe.db.get_value(
		"Employee",
		{"user_id": current_user, "status": "Active"},
		["name", "company"],
		as_dict=True
	)
	
	if not current_employee or not current_employee.company:
		# If no employee record, return empty list
		return []
	
	# Get all active employees in the same company (ignore_permissions to bypass user restrictions)
	employees = frappe.get_all(
		"Employee",
		filters={
			"company": current_employee.company,
			"status": "Active",
			"user_id": ["!=", ""]  # Only employees with user accounts
		},
		fields=[
			"name",
			"employee_name",
			"user_id",
			"company",
			"designation",
			"image"
		],
		ignore_permissions=True,
		order_by="employee_name asc"
	)
	
	# Filter out any with null/empty user_id (extra safety)
	employees = [e for e in employees if e.get("user_id")]
	
	return employees
