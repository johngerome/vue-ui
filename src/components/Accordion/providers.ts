import * as accordion from '@zag-js/accordion'
import { PropTypes } from '@zag-js/vue'
import { InjectionKey } from 'vue'

export const $api = Symbol(
  'accordion api',
) as InjectionKey<accordion.Api<PropTypes> | null>

export const $itemValue = Symbol('accordion value') as InjectionKey<string>
