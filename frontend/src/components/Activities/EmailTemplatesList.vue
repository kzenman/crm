<template>
  <div class="px-3 sm:px-10 py-5">
    <div v-if="emailTemplates.loading" class="flex justify-center py-10">
      <LoadingIndicator class="h-6 w-6" />
    </div>
    <div v-else-if="emailTemplates.data?.length" class="flex flex-col gap-4">
      <div
        v-for="template in emailTemplates.data"
        :key="template.name"
        class="border rounded-lg overflow-hidden"
      >
        <!-- Header -->
        <div
          @click="toggleTemplate(template.name)"
          class="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors"
        >
          <h3 class="font-medium text-ink-gray-9">{{ template.name }}</h3>
          <div class="flex items-center gap-2">
            <!-- Email Provider Buttons -->
            <Button
              @click.stop="openMailto(template, 'outlook')"
              class="!bg-blue-600 hover:!bg-blue-700 !text-white"
            >
              Outlook
            </Button>
            <Button
              @click.stop="openMailto(template, 'yahoo')"
              class="!bg-purple-600 hover:!bg-purple-700 !text-white"
            >
              Yahoo
            </Button>
            <Button
              @click.stop="openMailto(template, 'gmail')"
              class="!bg-red-600 hover:!bg-red-700 !text-white"
            >
              Gmail
            </Button>
            <Button
              @click.stop="openMailto(template, 'other')"
              class="!bg-gray-600 hover:!bg-gray-700 !text-white"
            >
              Other
            </Button>
            <FeatherIcon
              :name="expandedTemplates[template.name] ? 'chevron-up' : 'chevron-down'"
              class="h-4 w-4 text-ink-gray-5 ml-2"
            />
          </div>
        </div>

        <!-- Expanded Content -->
        <div
          v-if="expandedTemplates[template.name]"
          class="border-t bg-surface-white"
        >
          <div class="p-4 space-y-4">
            <!-- To Email -->
            <div>
              <label class="text-sm font-medium text-ink-gray-7 block mb-1">
                To
              </label>
              <div class="text-base text-ink-gray-9">{{ recipientEmail || 'No email set' }}</div>
            </div>

            <!-- Title -->
            <div>
              <label class="text-sm font-medium text-ink-gray-7 block mb-1">
                Title
              </label>
              <div class="text-base text-ink-gray-9">{{ template.subject }}</div>
            </div>

            <!-- Description -->
            <div>
              <label class="text-sm font-medium text-ink-gray-7 block mb-1">
                Description
              </label>
              <div
                class="text-base text-ink-gray-9 prose prose-sm max-w-none"
                v-html="renderTemplate(template.response || template.response_html)"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="text-center py-10 text-ink-gray-5">
      No Email Templates Found
    </div>
  </div>
</template>

<script setup>
import LoadingIndicator from '@/components/Icons/LoadingIndicator.vue'
import { createResource } from 'frappe-ui'
import { ref, computed } from 'vue'

const props = defineProps({
  doc: {
    type: Object,
    default: () => ({}),
  },
})

const expandedTemplates = ref({})

const recipientEmail = computed(() => props.doc?.email || '')

const emailTemplates = createResource({
  url: 'frappe.client.get_list',
  params: {
    doctype: 'Email Template',
    fields: ['name', 'subject', 'response', 'response_html', 'use_html'],
    filters: { enabled: 1, crm_template: 1 },
    order_by: 'name asc',
  },
  auto: true,
})

function toggleTemplate(templateName) {
  expandedTemplates.value[templateName] = !expandedTemplates.value[templateName]
}

function openMailto(template, provider) {
  const toEmail = recipientEmail.value || ''
  const subject = encodeURIComponent(template.subject || '')
  const renderedBody = renderTemplate(template.response || template.response_html || '')
  const body = encodeURIComponent(stripHtml(renderedBody))

  let mailtoUrl = `mailto:${toEmail}?subject=${subject}&body=${body}`

  // Provider-specific URLs
  if (provider === 'gmail') {
    mailtoUrl = `https://mail.google.com/mail/?view=cm&to=${toEmail}&su=${subject}&body=${body}`
  } else if (provider === 'outlook') {
    mailtoUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=${toEmail}&subject=${subject}&body=${body}`
  } else if (provider === 'yahoo') {
    mailtoUrl = `https://compose.mail.yahoo.com/?to=${toEmail}&subj=${subject}&body=${body}`
  }

  window.open(mailtoUrl, '_blank')
}

function renderTemplate(template) {
  if (!template) return ''
  
  const leadName = props.doc?.lead_name || props.doc?.first_name || ''
  const firstName = props.doc?.first_name || ''
  const lastName = props.doc?.last_name || ''
  
  return template
    .replace(/\{\{\s*doc\.lead_name\s*\}\}/g, leadName)
    .replace(/\{lead_name\}/g, leadName)
    .replace(/\{\{\s*doc\.first_name\s*\}\}/g, firstName)
    .replace(/\{first_name\}/g, firstName)
    .replace(/\{\{\s*doc\.last_name\s*\}\}/g, lastName)
    .replace(/\{last_name\}/g, lastName)
}

function stripHtml(html) {
  // Convert <br>, <br/>, and <br /> tags to newlines
  let text = html.replace(/<br\s*\/?>/gi, '\n')
  // Convert </p> tags to newlines (single, not double)
  text = text.replace(/<\/p>/gi, '\n')
  // Remove opening <p> tags without adding newlines
  text = text.replace(/<p[^>]*>/gi, '')
  // Remove all remaining HTML tags
  const tmp = document.createElement('DIV')
  tmp.innerHTML = text
  // Clean up multiple consecutive newlines to max 2
  return (tmp.textContent || tmp.innerText || '').replace(/\n{3,}/g, '\n\n')
}
</script>
