<script lang="ts" setup>
import { Icon } from '@iconify/vue'
</script>

<template>
  <h3 class="flex">
    <button
      class="font-medium flex justify-between flex-1 py-4 text-left hover:underline [&[data-state=open]>svg]:rotate-180 transition-all"
    >
      <slot />
      <Icon icon="tabler:chevron-up" class="text-gray-400" />
    </button>
  </h3>
</template>
