<script lang="ts" setup>
import { computed, useAttrs } from 'vue'

import { Props, Events } from './types'
import { cn } from '@/util/cn'
import useAccordion from './useAccordion'

const emit = defineEmits<Events>()

const attrs = useAttrs()
const props = defineProps<Props>()
const option = computed(() => props)
const { api } = useAccordion({
  ...option.value,
  onValueChange(details) {
    emit('onValueChange', details)
  },
  onFocusChange(details) {
    emit('onFocusChange', details)
  },
})

defineExpose({ api })
</script>

<template>
  <div
    v-bind="api.rootProps"
    :class="
      cn(
        'divide-y divide-slate-200 dark:divide-slate-200/10',
        attrs?.class || '',
      )
    "
  >
    <slot
      :api="api"
      :get-item-props="api.getItemProps"
      :get-item-content-props="api.getItemContentProps"
      :get-item-trigger-props="api.getItemTriggerProps"
    ></slot>
  </div>
</template>
