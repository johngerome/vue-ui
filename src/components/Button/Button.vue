<script lang="ts">
export const VARIANTS = {
  primary: 'bg-primary text-gray-200 hover:bg-primary/90',
  secondary: 'bg-secondary text-gray-200 hover:bg-secondary/90',
  'primary-outline':
    'border border-primary text-primary hover:bg-primary hover:text-gray-200',
  'secondary-outline':
    'border border-secondary text-secondary hover:bg-secondary hover:text-gray-200',
  'primary-link': 'text-primary',
  'secondary-link': 'text-secondary',
}
export const SIZES = {
  sm: 'p-1 text-xs',
  md: 'py-2 px-3 text-base',
  lg: 'p-3 text-lg',
  xl: 'p-4 text-xl',
  '2xl': 'p-6 text-xl',
}
export const THEME = {
  disabled: 'opacity-50 cursor-not-allowed',
  variants: VARIANTS,
  sizes: SIZES,
}
</script>

<script lang="ts" setup>
import { ButtonHTMLAttributes, PropType, computed, useAttrs } from 'vue'
import { Icon } from '@iconify/vue'
import { cn, get } from '@/util/cn'

export type Props = {
  theme?: keyof typeof THEME
  size?: keyof (typeof THEME)['sizes']
  variant?: keyof (typeof THEME)['variants']
  disabled?: boolean
  isLoading?: boolean
}

const attrs = useAttrs()
const props = defineProps({
  theme: {
    type: Object as PropType<typeof THEME>,
    default: () => THEME,
  },
  size: {
    type: String,
    default: 'md',
  },
  variant: {
    type: String,
    default: 'primary',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
})

const variantsClass = computed(() =>
  get(props.theme.variants, props.variant, 'variant'),
)
const sizesClass = computed(() => get(props.theme.sizes, props.size, 'size'))
</script>

<template>
  <button
    :type="(attrs?.type as ButtonHTMLAttributes['type']) || 'button'"
    :class="
      cn(
        'rounded flex items-center',
        { [THEME.disabled]: props.disabled || props.isLoading },
        attrs?.class || '',
        variantsClass,
        sizesClass,
      )
    "
    :disabled="props.disabled || props.isLoading"
    :title="(attrs?.title as string) || 'Button'"
  >
    <slot name="loading">
      <Icon
        v-show="props.isLoading"
        icon="eos-icons:three-dots-loading"
        class="absolute"
      />
    </slot>

    <span :class="{ invisible: props.isLoading }">
      <slot />
    </span>
  </button>
</template>
