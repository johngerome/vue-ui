<script lang="ts" setup>
import * as accordion from '@zag-js/accordion'
import useAccordion from './useAccordion'

type Props = {
  option: accordion.Context
}

const props = defineProps<Props>()

const { api } = useAccordion(props.option)

defineExpose({ api })
</script>

<template>
  <div
    v-if="api"
    ref="ref"
    v-bind="api.rootProps"
    class="divide-y divide-slate-200"
  >
    <slot :api="api"></slot>
  </div>
</template>
