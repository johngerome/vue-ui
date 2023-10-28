<script lang="ts">
export const THEME = {
  icon: 'text-gray-400 text-lg',
}
</script>

<script lang="ts" setup>
import { cn } from '@/util/cn'
import { useAttrs } from 'vue'
import { Icon } from '@iconify/vue'

const attrs = useAttrs()
</script>

<template>
  <button
    :class="
      cn(
        'font-medium flex justify-between flex-1 py-4 text-left hover:underline [&[data-state=open]>svg]:rotate-180 transition-all',
        attrs?.class || '',
      )
    "
  >
    <slot />
    <slot name="icon">
      <Icon icon="tabler:chevron-down" :class="THEME.icon" />
    </slot>
  </button>
</template>
