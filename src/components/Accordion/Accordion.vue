<script lang="ts" setup>
import * as accordion from '@zag-js/accordion'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed } from 'vue'

type Props = {
  option: accordion.Context
}

const props = defineProps<Props>()

const [state, send] = useMachine(accordion.machine(props.option))
const api = computed(() => {
  return accordion.connect(state.value, send, normalizeProps)
})

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
