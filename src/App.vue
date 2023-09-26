<script setup lang="ts">
import { ListLoop } from '@/components'
import UiButton from '@/ui/Button.vue'
</script>

<template>
  <div class="space-y-8">
    <ListLoop :items="['test 1', 'test 2']" />
    <UiButton>UiButton</UiButton>
  </div>
</template>
