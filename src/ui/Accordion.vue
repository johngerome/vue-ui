<script lang="ts" setup>
import Accordion from '@/components/Accordion/Accordion.vue'
import AccordionTrigger from '@/components/Accordion/AccordionTrigger.vue'
import AccordionContent from '@/components/Accordion/AccordionContent.vue'
import AccordionItem from '@/components/Accordion/AccordionItem.vue'
</script>

<template>
  <Accordion
    :option="{ id: 'accordion-1', collapsible: true }"
    v-slot="{ api }"
  >
    <AccordionItem :attrs="api.getItemProps({ value: 'item-1' })">
      <AccordionTrigger v-bind="api.getItemTriggerProps({ value: 'item-1' })">
        Section 1
      </AccordionTrigger>
      <AccordionContent v-bind="api.getItemContentProps({ value: 'item-1' })">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        inventore fugit nam quo saepe voluptas dolore assumenda!.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem :attrs="api.getItemProps({ value: 'item-2' })">
      <AccordionTrigger v-bind="api.getItemTriggerProps({ value: 'item-2' })">
        Section 2
      </AccordionTrigger>
      <AccordionContent v-bind="api.getItemContentProps({ value: 'item-2' })">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        inventore fugit nam quo saepe voluptas dolore assumenda!.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</template>
