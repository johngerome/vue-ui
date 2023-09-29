<script lang="ts" setup>
import { inject, provide } from 'vue'
import { $api, $itemValue } from './providers'

type Props = {
  value: string
}

const props = defineProps<Props>()
const api = inject($api)

provide($itemValue, props.value)
</script>

<template>
  <div v-bind="api?.getItemProps({ value: props.value })">
    <slot />
  </div>
</template>
