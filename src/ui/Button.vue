<script lang="ts" setup>
// import { THEME } from '@/components/Button/Button.vue'
import { Button } from '@/components'
import { Props } from '@/components/Button/Button.vue'

defineProps<Props>()

// const newTheme = {
//     ...THEME,
//     variants: {
//         ...THEME.variants,
//         primary: 'bg-red-500'
//     }
// }
</script>

<template>
  <div class="space-y-2">
    <div class="flex items-center space-x-2">
      <Button>Button</Button>
      <Button variant="secondary">Button</Button>
      <Button variant="primary-outline">Button Outline</Button>
      <Button variant="secondary-outline">Button Outline</Button>
      <Button variant="primary-link">Button Outline</Button>
      <Button variant="secondary-link">Button Outline</Button>
    </div>
    <div class="flex items-center space-x-2">
      <Button size="sm">Button</Button>
      <Button size="md">Button</Button>
      <Button size="lg">Button</Button>
      <Button size="xl">Button</Button>
      <Button size="2xl">Button</Button>
    </div>
    <div class="flex items-center space-x-2">
      <Button variant="primary-outline" size="sm">Button</Button>
      <Button variant="primary-outline" size="md">Button</Button>
      <Button variant="primary-outline" size="lg">Button</Button>
      <Button variant="primary-outline" size="xl">Button</Button>
      <Button variant="primary-outline" size="2xl">Button</Button>
    </div>
    <div class="flex items-center space-x-2">
      <Button variant="primary-link" size="sm">Button</Button>
      <Button variant="primary-link" size="md">Button</Button>
      <Button variant="primary-link" size="lg">Button</Button>
      <Button variant="primary-link" size="xl">Button</Button>
      <Button variant="primary-link" size="2xl">Button</Button>
    </div>
    <div class="flex items-center space-x-2">
      <Button variant="primary" size="sm" is-loading>Button</Button>
      <Button variant="primary" size="md" is-loading>Button</Button>
      <Button variant="primary" size="lg" is-loading>Button</Button>
      <Button variant="primary" size="xl" is-loading>Button</Button>
      <Button variant="primary" size="2xl" is-loading>Button</Button>
    </div>
  </div>
</template>
