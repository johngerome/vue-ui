<script lang="ts" setup>
// import { inject } from 'vue'
// import { $api, $itemValue } from './providers'

// const api = inject($api)
// const value = inject($itemValue, '')

// console.log(api?.getItemContentProps({ value }))
</script>

<template>
  <div class="overflow-hidden transition-all duration-300 ease-in-out py-4">
    <slot />
  </div>
</template>
