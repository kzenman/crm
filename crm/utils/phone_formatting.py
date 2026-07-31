import frappe
from crm.utils import parse_phone_number

def format_phone_number(phone_number, default_country="US", format_type="national"):
	"""
	Format a phone number to a consistent format.
	
	Args:
		phone_number (str): The phone number to format
		default_country (str): Default country code for parsing (default: "US")
		format_type (str): Format type - "national", "international", "E164" (default: "national")
	
	Returns:
		str: Formatted phone number or original if parsing fails
	"""
	if not phone_number:
		return phone_number
		
	# Clean the input by removing non-digit characters first
	cleaned_number = ''.join(filter(str.isdigit, str(phone_number)))
	
	# Skip if empty after cleaning
	if not cleaned_number:
		return phone_number
		
	# For US numbers, assume 10-digit numbers need area code formatting
	if default_country == "US" and len(cleaned_number) == 10:
		# Format as XXX-XXX-XXXX
		return f"{cleaned_number[:3]}-{cleaned_number[3:6]}-{cleaned_number[6:]}"
	
	# Try using the phonenumbers library for international formatting
	parsed_result = parse_phone_number(phone_number, default_country)
	
	if parsed_result.get("success") and parsed_result.get("is_valid"):
		formats = parsed_result.get("formats", {})
		
		# Return the requested format or fallback to national
		if format_type == "national" and formats.get("national"):
			formatted = formats["national"]
			# Clean up national format for US numbers to use dashes instead of spaces/parentheses
			if parsed_result.get("country") == "US":
				# Convert "(480) 555-1212" to "480-555-1212"
				import re
				formatted = re.sub(r'\D', '', formatted)  # Remove all non-digits
				if len(formatted) == 10:
					return f"{formatted[:3]}-{formatted[3:6]}-{formatted[6:]}"
			return formatted
		elif format_type == "international" and formats.get("international"):
			return formats["international"]
		elif format_type == "E164" and formats.get("E164"):
			return formats["E164"]
	
	# If parsing fails, try simple US formatting for 10-digit numbers
	if len(cleaned_number) == 10:
		return f"{cleaned_number[:3]}-{cleaned_number[3:6]}-{cleaned_number[6:]}"
	elif len(cleaned_number) == 11 and cleaned_number.startswith('1'):
		# Remove leading 1 and format
		cleaned_number = cleaned_number[1:]
		return f"{cleaned_number[:3]}-{cleaned_number[3:6]}-{cleaned_number[6:]}"
	
	# Return original if no formatting could be applied
	return phone_number


def format_doctype_phone_fields(doc, method):
	"""
	Format phone fields for CRM DocTypes on save.
	
	This function is called as a document hook to automatically format
	mobile_no and phone fields in CRM DocTypes.
	"""
	# Define DocTypes and their phone fields
	doctype_phone_fields = {
		"CRM Lead": ["mobile_no", "phone"],
		"CRM Deal": ["mobile_no", "phone"], 
		"CRM Contacts": ["mobile_no", "phone"],
		"CRM Telephony Agent": ["mobile_no"]
	}
	
	# Check if this DocType has phone fields to format
	if doc.doctype not in doctype_phone_fields:
		return
		
	# Get the phone fields for this DocType
	phone_fields = doctype_phone_fields[doc.doctype]
	
	# Format each phone field
	for field in phone_fields:
		if hasattr(doc, field) and doc.get(field):
			original_value = doc.get(field)
			formatted_value = format_phone_number(original_value)
			
			# Only update if the value changed
			if formatted_value != original_value:
				doc.set(field, formatted_value)


@frappe.whitelist()
def format_phone_client(phone_number, default_country="US"):
	"""
	Client-side API endpoint to format phone numbers.
	
	This can be called from frontend JavaScript to format phone numbers
	as the user types or on field blur.
	"""
	return format_phone_number(phone_number, default_country)