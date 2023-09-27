---
layout: doc
---

# Button

A button component is a clickable element that triggers actions when clicked.
It can contain text or icons, has different styles, and plays a role in user interaction and navigation.

## Import

```ts
import { Button } from '@johngerome/vue-ui'
```

<script setup>
import Button from '@/components/Button/Button.vue'
import { THEME } from '@/components/Button/Button.vue'
import { Icon } from '@iconify/vue'

const theme = {
    ...THEME,
    variants: {
        ...THEME.variants,
        primary: 'bg-red-500 hover:bg-red-600'
    }
}
</script>

## Composition

We highly recommend creating a Button wrapper instead of utilizing the Button component directly. Doing so will provide you with the flexibility to customize its appearance effortlessly through themes or Tailwind classes. This approach ensures greater control and consistency in your design.

::: code-group

```vue [MyButton.vue]
<script lang="ts" setup>
import Button from '@/components/Button/Button.vue'
import { THEME, Props } from '@/components/Button/Button.vue'

defineProps<Props>()

const theme = {
  ...THEME,
  variants: {
    ...THEME.variants,
    primary: 'bg-red-500 hover:bg-red-600',
  },
}
</script>

<template>
  <Button :theme="theme" class="rounded-none">Button</Button>
</template>
```

```vue [App.vue]
<template>
  <MyButton>Button</MyButton>
</template>
```

:::

::: details Preview
<Button :theme="theme" class="rounded-none">Button</Button>
:::

## Variants

Use `variant` prop to change the appearance of the Button. Available variants are `primary`, `outline`, `ghost` ,or ` link`.

<div class="flex items-center space-x-2">
  <Button>Button</Button>
  <Button variant="outline">Button</Button>
  <Button variant="ghost">Button</Button>
  <Button variant="link">Button</Button>
</div>

::: details Click me to view the code

```html
<button>Button</button>
<button variant="outline">Button</button>
<button variant="ghost">Button</button>
<button variant="link">Button</button>
```

:::

## Sizes

Use the `size` props to change the size of the Button. Available sizes are `sm`, `md`, `lg`, `xl` or `2xl`

<div class="flex items-center space-x-2">
  <Button size="sm">Button</Button>
  <Button size="md">Button</Button>
  <Button size="lg">Button</Button>
  <Button size="xl">Button</Button>
  <Button size="2xl">Button</Button>
</div>

::: details Click me to view the code

```html
<button size="sm">Button</button>
<button size="md">Button</button>
<button size="lg">Button</button>
<button size="xl">Button</button>
<button size="2xl">Button</button>
```

:::

## Loading

Pass the `is-loading` props to show its loading state.
To override loading icon use template `#loading`.

<div class="flex items-center space-x-2">
  <Button is-loading>Submitting</Button>
  <Button is-loading></Button>
  <Button is-loading>
    <span class="mr-3">Submitting</span>
    <template #loading>
      <Icon
        icon="eos-icons:three-dots-loading"
        class="text-3xl"
      />
    </template>
  </Button>
  <Button disabled use-custom-loading>
    <span>Submitting</span>
    <Icon
        icon="eos-icons:three-dots-loading"
        class="text-3xl"
      />
  </Button>
</div>

::: details Click me to view the code

```html
<button is-loading>Submitting</button>
<button is-loading></button>
<button is-loading>
  <span class="mr-3">Submitting</span>
  <template #loading>
    <Icon icon="eos-icons:three-dots-loading" class="text-3xl" />
  </template>
</button>
<button disabled use-custom-loading>
  <span>Submitting</span>
  <Icon icon="eos-icons:three-dots-loading" class="text-3xl" />
</button>
```

:::

## Theme

```ts
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
```

## Props

```ts
export type Props = {
  theme?: typeof THEME
  size?: keyof (typeof THEME)['sizes']
  variant?: keyof (typeof THEME)['variants']
  disabled?: boolean
  isLoading?: boolean
  useCustomLoading?: boolean
}
```
