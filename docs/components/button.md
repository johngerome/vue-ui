---
layout: doc
---

# Button

<script setup>
import Button from '@/components/Button/Button.vue'
</script>

## Variants

### Preview

<div class="flex items-center space-x-2">
  <Button>Primary</Button>
  <Button variant="outline" class="border border-red-500">Primary</Button>
  <Button variant="link">Link</Button>
</div>

### Code

```vue
<script setup>
import { Button } from '@johngerome/vue-ui'
</script>

<template>
  <Button>Primary</Button>
</template>
```
