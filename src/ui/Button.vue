<script lang="ts" setup>
// import { THEME } from '@/components/Button/Button.vue'
import Button from '@/components/Button/Button.vue'
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
      <Button size="sm">Button</Button>
      <Button size="md">Button</Button>
      <Button size="lg">Button</Button>
      <Button size="xl">Button</Button>
      <Button size="2xl">Button</Button>
    </div>
    <div class="flex items-center space-x-2">
      <Button variant="outline" size="sm">Button</Button>
      <Button variant="outline" size="md">Button</Button>
      <Button variant="outline" size="lg">Button</Button>
      <Button variant="outline" size="xl">Button</Button>
      <Button variant="outline" size="2xl">Button</Button>
    </div>
    <div class="flex items-center space-x-2">
      <Button variant="link" size="sm">Button</Button>
      <Button variant="link" size="md">Button</Button>
      <Button variant="link" size="lg">Button</Button>
      <Button variant="link" size="xl">Button</Button>
      <Button variant="link" size="2xl">Button</Button>
    </div>
    <div class="flex items-center space-x-2">
      <Button variant="ghost" size="sm">Button</Button>
      <Button variant="ghost" size="md">Button</Button>
      <Button variant="ghost" size="lg">Button</Button>
      <Button variant="ghost" size="xl">Button</Button>
      <Button variant="ghost" size="2xl">Button</Button>
    </div>
    <div class="flex items-center space-x-2">
      <Button variant="primary" size="sm" is-loading>Button</Button>
      <Button variant="primary" size="md" is-loading>Button</Button>
      <Button variant="primary" size="lg" is-loading>Button</Button>
      <Button variant="primary" size="xl" is-loading>Button</Button>
      <Button variant="primary" size="2xl" is-loading>Button</Button>
    </div>
    <div class="flex items-center space-x-2">
      <Button is-loading class="flex-row-reverse">
        <span class="mr-3">Button</span>
        <template #loading></template>
      </Button>
      <Button class="flex-row-reverse" is-disabled> Button... </Button>
    </div>
  </div>
</template>
