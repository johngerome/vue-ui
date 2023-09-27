<script setup lang="ts">
import UiAccordion from '@/ui/Accordion.vue'
import UiButton from '@/ui/Button.vue'
</script>

<template>
  <div class="space-y-8 w-full max-w-[1024px] mx-auto pt-12">
    <div>
      <h2 class="font-bold text-2xl">Accordion</h2>
      <UiAccordion></UiAccordion>
    </div>
    <div>
      <h2 class="font-bold text-2xl">Button</h2>
      <UiButton>UiButton</UiButton>
    </div>
  </div>
</template>
