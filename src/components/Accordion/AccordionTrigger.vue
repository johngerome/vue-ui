<script lang="ts" setup>
import { Icon } from '@iconify/vue'

defineOptions({
  inheritAttrs: false,
})
</script>

<template>
  <h3 class="flex">
    <button
      v-bind="$attrs"
      class="font-medium flex justify-between flex-1 py-4 text-left hover:underline [&[data-state=open]>svg]:rotate-180 transition-all"
    >
      <slot />
      <Icon icon="tabler:chevron-down" class="text-gray-400" />
    </button>
  </h3>
</template>
