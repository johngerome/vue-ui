import * as accordion from '@zag-js/accordion'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed } from 'vue'

export default function (option: accordion.Context) {
  const [state, send] = useMachine(accordion.machine(option))
  const api = computed(() => {
    return accordion.connect(state.value, send, normalizeProps)
  })

  return { api }
}
