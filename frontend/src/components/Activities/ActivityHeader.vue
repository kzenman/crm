<template>
  <div
    v-if="title !== 'Data'"
    class="mx-4 my-3 flex items-center justify-between text-lg font-medium sm:mx-10 sm:mb-4 sm:mt-8"
  >
    <div class="flex h-8 items-center text-xl font-semibold text-ink-gray-8">
      {{ __(title) }}
    </div>
    <Button
      v-if="title == 'Comments'"
      variant="solid"
      @click="emailBox.showComment = true"
    >
      <template #prefix>
        <FeatherIcon name="plus" class="h-4 w-4" />
      </template>
      <span>{{ __('New Comment') }}</span>
    </Button>
    <MultiActionButton
      v-else-if="title == 'Calls'"
      variant="solid"
      :options="callActions"
    />
    <Button
      v-else-if="title == 'Notes'"
      variant="solid"
      @click="modalRef.showNote()"
    >
      <template #prefix>
        <FeatherIcon name="plus" class="h-4 w-4" />
      </template>
      <span>{{ __('New Note') }}</span>
    </Button>
    <Button
      v-else-if="title == 'Tasks'"
      variant="solid"
      @click="modalRef.showTask()"
    >
      <template #prefix>
        <FeatherIcon name="plus" class="h-4 w-4" />
      </template>
      <span>{{ __('New Task') }}</span>
    </Button>
    <Button
      v-else-if="title == 'Attachments'"
      variant="solid"
      @click="showFilesUploader = true"
    >
      <template #prefix>
        <FeatherIcon name="plus" class="h-4 w-4" />
      </template>
      <span>{{ __('Upload Attachment') }}</span>
    </Button>
    <div class="flex gap-2 shrink-0" v-else-if="title == 'WhatsApp'">
      <Button
        :label="__('Send Template')"
        @click="showWhatsappTemplates = true"
      />
      <Button variant="solid" @click="whatsappBox.show()">
        <template #prefix>
          <FeatherIcon name="plus" class="h-4 w-4" />
        </template>
        <span>{{ __('New Message') }}</span>
      </Button>
    </div>
  </div>
</template>
<script setup>
import MultiActionButton from '@/components/MultiActionButton.vue'
import PhoneIcon from '@/components/Icons/PhoneIcon.vue'
import { globalStore } from '@/stores/global'
import { callEnabled } from '@/composables/settings'
import { computed, h } from 'vue'

const props = defineProps({
  tabs: Array,
  title: String,
  doc: Object,
  modalRef: Object,
  emailBox: Object,
  whatsappBox: Object,
})

const { makeCall } = globalStore()

const showWhatsappTemplates = defineModel('showWhatsappTemplates')
const showFilesUploader = defineModel('showFilesUploader')

const callActions = computed(() => {
  let actions = [
    {
      label: __('Log a Call'),
      icon: 'plus',
      onClick: () => props.modalRef.createCallLog(),
    },
    {
      label: __('Make a Call'),
      icon: h(PhoneIcon, { class: 'h-4 w-4' }),
      onClick: () => makeCall(props.doc.mobile_no),
      condition: () => callEnabled.value,
    },
  ]

  return actions.filter((action) =>
    action.condition ? action.condition() : true,
  )
})
</script>
