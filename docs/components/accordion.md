---
layout: doc
---

# Accordion

Accordion is an element that allows content to expand and collapse, typically used to display information in a compact manner with the option to reveal more details when needed.

## Import

```ts
import { Accordion } from '@johngerome/vue-ui/accordion'
```

## Usage

### Component

<script setup>
import { ref, watchEffect } from 'vue'

import { Accordion, AccordionTrigger, AccordionContent, useAccordion } from '@/components/Accordion/accordion.ts'

const { api: accordionApi } = useAccordion({
  id: 'accordion',
  collapsible: true
})

const accordion = ref(null)
</script>

::: raw

 <Accordion id="accordion" v-slot="{ api }" collapsible>
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

:::

::: details Code Example

```vue
<template>
  <Accordion id="accordion" v-slot="{ api }" collapsible>
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
```

:::

### Composition

Using [Zag](https://zagjs.com/components/react/accordion) under the hood.

```vue
<script setup>
import { useAccordion } from '@johngerome/vue-ui/accordion'

const { api } = useAccordion({
  id: 'accordion',
})
</script>
<template>
  <div v-bind="api.rootProps">
    <div v-bind="api.getItemProps({ value: 'item-1' })">
      <h3 class="flex">
        <button v-bind="api.getItemTriggerProps({ value: 'item-1' })">
          Section 1
        </button>
      </h3>
      <div v-bind="api.getItemContentProps({ value: 'item-1' })">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        inventore fugit nam quo saepe voluptas dolore assumenda!.
      </div>
    </div>
  </div>
</template>
```

## Props

```ts
export type Props = {
  /**
   * The unique identifier of the machine.
   */
  id: string
  /**
   * A root node to correctly resolve document in custom environments. E.x.: Iframes, Electron.
   */
  getRootNode?: () => ShadowRoot | Document | Node
  /**
   * The ids of the elements in the accordion. Useful for composition.
   */
  ids?: ElementIds
  /**
   * Whether multple accordion items can be open at the same time.
   * @default false
   */
  multiple?: boolean
  /**
   * Whether an accordion item can be collapsed after it has been opened.
   * @default false
   */
  collapsible?: boolean
  /**
   * The `id` of the accordion item that is currently being opened.
   */
  value?: string[]
  /**
   * Whether the accordion items are disabled
   */
  disabled?: boolean
  /**
   * The document's text/writing direction.
   * @default "ltr"
   */
  dir?: 'ltr' | 'rtl'
}
```

## Methods

You can use [Zag](https://zagjs.com/components/react/accordion) method and properties

### Component

Add a `ref` to the component, and call the method on that ref.
The api expose via `api` key.

::: raw

<p>Value: {{ accordion?.api.value }}</p>
<Accordion ref="accordion" id="accordion" v-slot="{ api }" collapsible>
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
:::

::: details Code Example

```vue
<script setup>
import { ref, watchEffect } from 'vue'

const accordion = ref(null)
</script>
<template>
  <p>Value: {{ accordion?.api.value }}</p>
  <Accordion ref="accordion" id="accordion" v-slot="{ api }" collapsible>
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
```

:::

### Composition

::: raw

<p>Value: {{ accordionApi.value }}</p>
<div v-bind="accordionApi.rootProps">
  <div v-bind="accordionApi.getItemProps({ value: 'item-1' })">
    <h3 class="flex">
      <button v-bind="accordionApi.getItemTriggerProps({ value: 'item-1' })">
        Section 1
      </button>
    </h3>
    <div v-bind="accordionApi.getItemContentProps({ value: 'item-1' })">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
      inventore fugit nam quo saepe voluptas dolore assumenda!.
    </div>
  </div>
</div>
:::

::: details Code Example

```vue
<script setup>
const { api } = useAccordion({
  id: 'accordion',
})
</script>
<template>
  <p>Value: {{ api.value }}</p>
  <div v-bind="api.rootProps">
    <div v-bind="api.getItemProps({ value: 'item-1' })">
      <h3 class="flex">
        <button v-bind="api.getItemTriggerProps({ value: 'item-1' })">
          Section 1
        </button>
      </h3>
      <div v-bind="api.getItemContentProps({ value: 'item-1' })">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        inventore fugit nam quo saepe voluptas dolore assumenda!.
      </div>
    </div>
  </div>
</template>
```

:::

## Events

### @on-value-change

::: details Code Example

```vue
<script setup>
function onValueChange({ value }) {
  console.log(value)
}
</script>
<template>
  <Accordion id="accordion" v-slot="{ api }" @on-value-change="onValueChange">
    <!-- ... -->
  </Accordion>
</template>
```

:::

### @on-focus-change

::: details Code Example

```vue
<script setup>
function onFocusChange({ value }) {
  console.log(value)
}
</script>
<template>
  <Accordion id="accordion" v-slot="{ api }" @on-focus-change="onFocusChange">
    <!-- ... -->
  </Accordion>
</template>
```

:::
