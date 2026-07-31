<template>
  <Dialog
    v-model="show"
    :options="{
      size: 'xl',
      actions: [
        {
          label: editMode ? __('Update') : __('Create'),
          variant: 'solid',
          onClick: () => updateTask(),
        },
      ],
    }"
  >
    <template #body-title>
      <div class="flex items-center gap-3">
        <h3 class="text-2xl font-semibold leading-6 text-ink-gray-9">
          {{ editMode ? __('Edit Task') : __('Create Task') }}
        </h3>
        <Button
          v-if="task?.reference_docname"
          size="sm"
          :label="
            task.reference_doctype == 'CRM Deal'
              ? __('Open Deal')
              : __('Open Lead')
          "
          @click="redirect()"
        >
          <template #suffix>
            <ArrowUpRightIcon class="w-4 h-4" />
          </template>
        </Button>
      </div>
    </template>
    <template #body-content>
      <div class="flex flex-col gap-4">
        <div>
          <FormControl
            ref="title"
            :label="__('Title')"
            v-model="_task.title"
            :placeholder="__('Call with John Doe')"
            required
          />
        </div>
        <div>
          <div class="mb-1.5 text-xs text-ink-gray-5">
            {{ __('Description') }}
          </div>
          <TextEditor
            variant="outline"
            ref="description"
            editor-class="!prose-sm overflow-auto min-h-[180px] max-h-80 py-1.5 px-2 rounded border border-[--surface-gray-2] bg-surface-gray-2 placeholder-ink-gray-4 hover:border-outline-gray-modals hover:bg-surface-gray-3 hover:shadow-sm focus:bg-surface-white focus:border-outline-gray-4 focus:shadow-sm focus:ring-0 focus-visible:ring-2 focus-visible:ring-outline-gray-3 text-ink-gray-8 transition-colors"
            :bubbleMenu="true"
            :content="_task.description"
            @change="(val) => (_task.description = val)"
            :placeholder="
              __('Call John Doe and discussed the new project.')
            "
          />
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <Dropdown :options="taskStatusOptions(updateTaskStatus)">
            <Button :label="_task.status" class="justify-between w-full">
              <template #prefix>
                <TaskStatusIcon :status="_task.status" />
              </template>
            </Button>
          </Dropdown>
        
          <Link
            class="form-control"
            v-model="_task.assigned_to"
            doctype="Employee"
            :filters="{ status: 'Active' }"
            :placeholder="__('John Doe')"
          >
            <template #target="{ open, togglePopover }">
              <button
                class="form-control flex w-full items-center justify-between rounded border border-gray-300 bg-white px-2 py-1.5 text-sm transition-colors hover:border-gray-400 focus:border-gray-500 focus:ring-2 focus:ring-gray-200"
                @click="togglePopover()"
              >
                <div class="flex items-center gap-2 flex-1 min-w-0">
                  <FeatherIcon name="user" class="h-4 w-4 text-gray-500 flex-shrink-0" />
                  <span class="truncate">
                    {{ getEmployee(_task.assigned_to).employee_name || __('John Doe') }}
                  </span>
                </div>
                <FeatherIcon 
                  :name="open ? 'chevron-up' : 'chevron-down'" 
                  class="h-4 w-4 text-gray-500 flex-shrink-0" 
                />
              </button>
            </template>
            <template #item-prefix="{ option }">
              <FeatherIcon name="user" class="mr-2 h-4 w-4" />
            </template>
            <template #item-label="{ option }">
              <div class="flex flex-col gap-1">
                <div class="flex-1 font-semibold truncate text-ink-gray-7">
                  {{ option.description || option.label }}
                </div>
                <div class="flex-1 text-sm truncate text-ink-gray-5">
                  {{ option.value }}
                </div>
              </div>
            </template>
          </Link>
<!--           new dropdow -->

          <Link
            class="form-control flex-1 min-w-[200px]"
            v-model="_task.seed"
            doctype="CRM Lead"
            :placeholder="__('Select Seed')"
          >
            <template #prefix>
              <FeatherIcon name="target" class="mr-2 h-4 w-4" />
            </template>
          </Link>
          <DateTimePicker
            class="datepicker w-36"
            v-model="_task.due_date"
            :placeholder="__('01/04/2024 11:30 PM')"
            :formatter="(date) => getFormat(date, '', true, true)"
            input-class="border-none"
          />
          <Dropdown :options="taskPriorityOptions(updateTaskPriority)">
            <Button :label="_task.priority" class="justify-between w-full">
              <template #prefix>
                <TaskPriorityIcon :priority="_task.priority" />
              </template>
            </Button>
          </Dropdown>
          <div class="mb-1.5 text-xs text-ink-gray-5">
            {{ __('Repeat') }}
          </div>
          <Checkbox v-model="repeatChecked" id="repeat-checkbox" >
            <template #label>
              <span>Repeat</span>
            </template>
          </Checkbox>
          <Dropdown :options="taskRepeatOptions(updateTaskWeeks)" v-if="repeatChecked" v-model="_task.repeat_sel">
            <Button :label="_task.repeat_sel" class="justify-between w-24">
              <template #prefix>
                <TaskPriorityIcon :repeat_sel="_task.repeat_sel" />
              </template>
            </Button>
          </Dropdown>
        </div>
        <ErrorMessage class="mt-4" v-if="error" :message="__(error)" />
      </div>
    </template>
  </Dialog>
</template>

<script setup>
import TaskStatusIcon from '@/components/Icons/TaskStatusIcon.vue'
import TaskPriorityIcon from '@/components/Icons/TaskPriorityIcon.vue'
import ArrowUpRightIcon from '@/components/Icons/ArrowUpRightIcon.vue'
import UserAvatar from '@/components/UserAvatar.vue'
import Link from '@/components/Controls/Link.vue'
import { taskStatusOptions, taskPriorityOptions, taskRepeatOptions, getFormat } from '@/utils'
import { usersStore } from '@/stores/users'
import { capture } from '@/telemetry'
import { TextEditor, Dropdown, Tooltip, call, DateTimePicker, Checkbox, FeatherIcon, createResource, Autocomplete } from 'frappe-ui'
import { useOnboarding } from 'frappe-ui/frappe'
import { ref, watch, nextTick, onMounted, computed } from 'vue'

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj))
}
import { useRouter } from 'vue-router'
  
const repeatChecked = computed({
  get() {
    return _task.value.repeat === 1 || _task.value.repeat === '1' || _task.value.repeat === true;
  },
  set(val) {
    _task.value.repeat = val ? 1 : 0;
    if (val && !_task.value.repeat_sel) {
      _task.value.repeat_sel = '1 week';
    }
    if (!val) {
      _task.value.repeat_sel = '';
    }
  }
});

const props = defineProps({
  task: {
    type: Object,
    default: {},
  },
  doctype: {
    type: String,
    default: 'CRM Lead',
  },
  doc: {
    type: String,
    default: '',
  },
})

const show = defineModel()
const tasks = defineModel('reloadTasks')

const emit = defineEmits(['updateTask', 'after'])

const router = useRouter()
const { users, employees, getUser, getCompanyUsers } = usersStore()
const { updateOnboardingStep } = useOnboarding('frappecrm')

const error = ref(null)
const title = ref(null)
const editMode = ref(false)

// Function to get employee data by employee name (e.g., HR-EMP-00003)
function getEmployee(employeeName) {
  if (!employeeName) {
    return { employee_name: '', name: '', user_id: null }
  }
  // Check if employees.data exists and has the employee
  const emp = employees.data?.find(e => e.name === employeeName)
  if (emp) {
    return emp
  }
  // Fallback if employee not found
  return { employee_name: employeeName, name: employeeName, user_id: null }
}


// Computed property to get company users as options for Autocomplete
const currentCompany = computed(() => getUser().company);
  
const companyUserOptions = computed(() => {

    return getCompanyUsers().map(user => ({
      label: user.full_name || user.email,
      value: user.email,
      designation: user.designation,
      email: user.email,
      user_image: user.user_image,
    }));

})

// console.log('[getCompanyUsers] render ', getCompanyUsers(), 'AND ', companyUserOptions.value);

// Get selected user option for display
const selectedUserOption = computed(() => {
  if (!_task.value.assigned_to) return null
  const user = getUser(_task.value.assigned_to)
  return {
    label: user.full_name || _task.value.assigned_to,
    value: _task.value.assigned_to,
    user_image: user.user_image,
  }
})

// Define the default structure for a new task
const defaultTask = {
  title: '',
  description: '',
  assigned_to: '',
  due_date: '',
  status: 'Seed Gathering',
  priority: 'Low',
  crm_lead_status: null,
  reference_doctype: props.doctype,
  reference_docname: null,
  seed: '',
  repeat: 0,
  repeat_sel: '',
  completed: 0
};

const _task = ref({ ...defaultTask });

function updateTaskStatus(status) {
  _task.value.status = status
}

function updateTaskPriority(priority) {
  _task.value.priority = priority
}

function updateTaskWeeks(weeks) {
  _task.value.repeat_sel = weeks
}

function redirect() {
  if (!props.task?.reference_docname) return
  let name = props.task.reference_doctype == 'CRM Deal' ? 'Deal' : 'Lead'
  let params = { leadId: props.task.reference_docname }
  if (name == 'Deal') {
    params = { dealId: props.task.reference_docname }
  }
  router.push({ name: name, params: params })
}
  

async function updateTask() {
  console.log('updateTask', _task.value);
  try {
    // Get the user_id (email) from the selected employee
    let assignedToUser = _task.value.assigned_to
    if (_task.value.assigned_to && _task.value.assigned_to.startsWith('HR-EMP-')) {
      // It's an Employee ID, convert to user email
      const emp = getEmployee(_task.value.assigned_to)
      assignedToUser = emp.user_id || getUser().name
    } else if (!assignedToUser) {
      assignedToUser = getUser().name
    }
    
    const result = _task.value.name 
      ? await call('frappe.client.set_value', {
          doctype: 'CRM Task',
          name: _task.value.name,
          fieldname: {
            title: _task.value.title,
            description: _task.value.description,
            assigned_to: assignedToUser,
            due_date: _task.value.due_date,
            status: _task.value.status,
            priority: _task.value.priority,
            seed: _task.value.seed,
            repeat: _task.value.repeat,
            repeat_sel: _task.value.repeat_sel,
            completed: _task.value.completed,
          },
        })
      : await call('frappe.client.insert', {
          doc: {
            doctype: 'CRM Task',
            reference_doctype: props.doctype,
            reference_docname: props.doc || null,
            completed: 0,
            ..._task.value,
            assigned_to: assignedToUser,
          },
        })

    if (result.name) {
      if (!_task.value.name) {
        // updateOnboardingStep('create_first_task')
        capture('task_created')
        emit('after', result, true)
      } else {
        emit('after', result)
      }
      tasks.value?.reload()
    }
  } catch (err) {
    if (err.error?.exc_type === 'MandatoryError') {
      error.value = 'Title is mandatory'
    }
    console.error('Error in updateTask:', err)
    return
  }
  show.value = false
}

function render() {
  // console.log('TaskModal render() called with props.task:', props.task)
  editMode.value = false
  
  // Force fetch employees if not loaded
  if (!employees.fetched) {
    // console.log('[TASKMODAL] render - forcing employees.fetch()')
    employees.fetch()
  }
  
  nextTick(() => {
    title.value?.el?.focus?.()
    
    // Simple assignment without deep cloning
    if (props.task && Object.keys(props.task).length > 0) {
      // console.log('TaskModal render - copying props.task to _task')
      _task.value = { ...defaultTask, ...props.task }
      
      // Convert User email back to Employee ID for display
      if (_task.value.assigned_to && !_task.value.assigned_to.startsWith('HR-EMP-')) {
        // It's a User email, find the corresponding Employee ID
        const emp = employees.data?.find(e => e.user_id === _task.value.assigned_to)
        if (emp) {
          _task.value.assigned_to = emp.name
        }
      }
    } else {
      // console.log('TaskModal render - using defaultTask')
      _task.value = { ...defaultTask }
      // Pre-fill seed with the current seed/lead/doc if available
      if (props.doc && (props.doctype === 'CRM Lead' || props.doctype === 'CRM Lead')) {
        _task.value.seed = props.doc
      }
    }

    // Force repeatChecked sync
    repeatChecked.value =
      _task.value.repeat === 1 ||
      _task.value.repeat === '1' ||
      _task.value.repeat === true

    // console.log('TaskModal render - final _task:', _task.value)

    // If repeat is checked and repeat_sel is empty, set default
    if (repeatChecked.value && !_task.value.repeat_sel) {
      _task.value.repeat_sel = '1 week'
    }
    // If repeat is not checked, clear repeat_sel
    if (!repeatChecked.value) {
      _task.value.repeat_sel = ''
    }

    if (_task.value.name) {
      editMode.value = true
    }
  })
}

onMounted(() => show.value && render())

// Watch for modal open
watch(show, (value) => {
  if (!value) return
  render()
})

// Watch for task prop change (when editing a different task)
watch(
  () => props.task,
  (newTask) => {
    // console.log('TaskModal - task prop changed:', newTask)
    if (newTask && Object.keys(newTask).length > 0) {
      // console.log('TaskModal - updating _task with:', newTask)
      _task.value = { ...defaultTask, ...newTask }
      
      // Convert User email back to Employee ID for display
      if (_task.value.assigned_to && !_task.value.assigned_to.startsWith('HR-EMP-')) {
        // It's a User email, find the corresponding Employee ID
        const emp = employees.data?.find(e => e.user_id === _task.value.assigned_to)
        if (emp) {
          _task.value.assigned_to = emp.name
        }
      }
      
      // Update edit mode based on whether task has a name
      editMode.value = !!newTask.name
      
      // Update repeat checkbox
      repeatChecked.value =
        newTask.repeat === 1 ||
        newTask.repeat === '1' ||
        newTask.repeat === true
        
      // console.log('TaskModal - _task after update:', _task.value) 
    }
  },
  { deep: true, immediate: true }
)
</script>

<style scoped>
:deep(.datepicker svg) {
  width: 0.875rem;
  height: 0.875rem;
}
</style>
