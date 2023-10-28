<script lang="ts" setup>
import { cn } from '@/util/cn'
import { useAttrs } from 'vue'

const attrs = useAttrs()
</script>

<template>
  <div
    :class="
      cn(
        'overflow-hidden transition-all duration-300 ease-in-out py-4',
        attrs?.class || '',
      )
    "
  >
    <slot />
  </div>
</template>
