<script lang="ts">
export const THEME = {
  disabled: 'opacity-50 cursor-not-allowed',
  variants: {
    primary: 'bg-primary text-gray-100 hover:bg-primary/90',
    outline:
      'border border-primary/30 text-primary hover:bg-primary hover:text-gray-100',
    ghost: 'text-primary hover:bg-primary/10',
    link: 'text-primary hover:underline',
  },
  sizes: {
    sm: 'px-2 py-1 text-xs rounded h-6',
    md: 'py-2 px-3 text-base rounded-md h-10',
    lg: 'p-3 text-lg rounded-md h-13',
    xl: 'p-4 text-xl rounded-lg h-16',
    '2xl': 'p-6 text-xl rounded-lg h-19',
  },
  loading: {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-xl',
    xl: 'text-2xl',
    '2xl': 'text-3xl',
  },
}
</script>

<script lang="ts" setup>
import { ButtonHTMLAttributes, computed, useAttrs } from 'vue'
import { Icon } from '@iconify/vue'
import { cn, get } from '@/util/cn'

export type Props = {
  theme?: typeof THEME
  size?: keyof (typeof THEME)['sizes']
  variant?: keyof (typeof THEME)['variants']
  disabled?: boolean
  isLoading?: boolean
  useCustomLoading?: boolean
}

const attrs = useAttrs()
const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  variant: 'primary',
  disabled: false,
  isLoading: false,
  useCustomLoading: false,
  theme: () => THEME,
})

const theme = computed(() => props.theme || THEME)
const variantsClass = computed(() =>
  get(theme.value.variants, props.variant, 'variant'),
)
const sizesClass = computed(() => get(theme.value.sizes, props.size, 'size'))
const loadingClass = computed(() =>
  get(theme.value.loading, props.size, 'size'),
)
</script>

<template>
  <button
    :type="(attrs?.type as ButtonHTMLAttributes['type']) || 'button'"
    :class="
      cn(
        'transition-colors flex items-center font-medium focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none border-solid space-x-3',
        { [THEME.disabled]: props.disabled || props.isLoading },
        attrs?.class || '',
        variantsClass,
        sizesClass,
      )
    "
    :disabled="props.disabled || props.isLoading"
  >
    <template v-if="props.useCustomLoading"> <slot /> </template>
    <template v-else>
      <slot name="loading">
        <Icon
          v-show="props.isLoading"
          icon="line-md:loading-twotone-loop"
          :class="loadingClass"
        />
      </slot>

      <template v-if="$slots.default && props.isLoading">
        <span><slot /></span>
      </template>
      <slot v-else />
    </template>
  </button>
</template>
