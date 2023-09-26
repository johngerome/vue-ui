<script lang="ts" setup>
import { cn } from '@/util/cn'

type Props = {
  items: Record<string, any> | any[]
}

const props = defineProps<Props>()

const getItem = (key: string) => props.items[key as keyof typeof props.items]
</script>

<template>
  <ul v-if="props.items" :class="cn('mb-0 pl-4 list-none space-y-2')">
    <template
      v-if="typeof props.items === 'object' && !Array.isArray(props.items)"
    >
      <li v-for="(key, index) in Object.keys(props.items)" :key="index">
        <span class="font-medium">{{ key }}:</span>
        <ListLoop
          v-if="Array.isArray(getItem(key))"
          :items="props.items[key]"
        />
        <template v-else>
          {{ getItem(key) }}
        </template>
      </li>
    </template>
    <template
      v-else-if="typeof props.items === 'object' && Array.isArray(props.items)"
    >
      <li v-for="(item, index) in props.items" :key="index">
        <span
          v-if="
            typeof item === 'string' ||
            typeof item === 'number' ||
            typeof item === 'boolean'
          "
          v-text="item"
        ></span>
        <ListLoop v-else-if="typeof item === 'object'" :items="item" />
      </li>
    </template>
  </ul>
</template>
