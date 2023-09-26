<script lang="ts">
export const VARIANTS = {
  primary: 'bg-primary text-gray-100 hover:bg-primary/90',
  outline:
    'border border-primary/30 text-primary hover:bg-primary hover:text-gray-100',
  ghost: 'text-primary hover:bg-primary/10',
  link: 'text-primary hover:underline',
}
export const SIZES = {
  sm: 'px-2 py-1 text-xs rounded',
  md: 'py-2 px-3 text-base rounded-md',
  lg: 'p-3 text-lg rounded-md',
  xl: 'p-4 text-xl rounded-lg',
  '2xl': 'p-6 text-xl rounded-lg',
}
export const THEME = {
  disabled: 'opacity-50 cursor-not-allowed',
  variants: VARIANTS,
  sizes: SIZES,
  loadingIcon: {
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
  get(theme.value.loadingIcon, props.size, 'size'),
)
</script>

<template>
  <button
    :type="(attrs?.type as ButtonHTMLAttributes['type']) || 'button'"
    :class="
      cn(
        'transition-colors flex items-center font-medium focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none',
        { [THEME.disabled]: props.disabled || props.isLoading },
        attrs?.class || '',
        variantsClass,
        sizesClass,
      )
    "
    :disabled="props.disabled || props.isLoading"
    :title="(attrs?.title as string) || 'Button'"
  >
    <slot v-if="!props.useCustomLoading" name="loading">
      <Icon
        v-show="props.isLoading"
        icon="line-md:loading-twotone-loop"
        :class="loadingClass"
        class="mr-3"
      />
    </slot>

    <slot />
  </button>
</template>
