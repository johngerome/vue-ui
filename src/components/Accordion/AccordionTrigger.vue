<script lang="ts" setup>
import { Icon } from '@iconify/vue'
// import { inject } from 'vue'
// import { $api, $itemValue } from './providers'

// const api = inject($api)
// const value = inject($itemValue, '')
</script>

<template>
  <button
    class="font-medium flex justify-between flex-1 py-4 text-left hover:underline [&[data-state=open]>svg]:rotate-180 transition-all"
  >
    <slot />
    <Icon icon="tabler:chevron-down" class="text-gray-400 text-lg" />
  </button>
</template>
