<script lang="ts" setup>
import * as accordion from '@zag-js/accordion'
import { provide } from 'vue'

import { $api } from './providers'
import useAccordion from './useAccordion'

export type Props = {
  option: accordion.Context
}

const props = defineProps<Props>()
const { api } = useAccordion(props.option)

provide($api, api.value)
defineExpose({ api })
</script>

<template>
  <div v-bind="api.rootProps" class="divide-y divide-slate-200">
    <slot :api="api"></slot>
  </div>
</template>
