<script lang="ts" setup>
import Accordion from '@/components/Accordion/Accordion.vue'
import AccordionTrigger from '@/components/Accordion/AccordionTrigger.vue'
import AccordionContent from '@/components/Accordion/AccordionContent.vue'
// import AccordionItem from '@/components/Accordion/AccordionItem.vue'
// import { ref, watchEffect } from 'vue'

// import AccordionItem from '@/components/Accordion/AccordionItem.vue'
// const accordion = ref<InstanceType<typeof Accordion> | null>(null)
</script>

<template>
  <Accordion
    :option="{ id: 'accordion-1', collapsible: true }"
    v-slot="{ api }"
  >
    <div v-bind="api?.getItemProps({ value: 'item-1' })">
      <h3 class="flex">
        <AccordionTrigger v-bind="api.getItemTriggerProps({ value: 'item-1' })">
          Section 1
        </AccordionTrigger>
      </h3>

      <AccordionContent v-bind="api.getItemContentProps({ value: 'item-1' })">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        inventore fugit nam quo saepe voluptas dolore assumenda!.
      </AccordionContent>
    </div>

    <div v-bind="api?.getItemProps({ value: 'item-2' })">
      <h3 class="flex">
        <AccordionTrigger v-bind="api.getItemTriggerProps({ value: 'item-2' })">
          Section 2
        </AccordionTrigger>
      </h3>

      <AccordionContent v-bind="api.getItemContentProps({ value: 'item-2' })">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        inventore fugit nam quo saepe voluptas dolore assumenda!.
      </AccordionContent>
    </div>
  </Accordion>
</template>
