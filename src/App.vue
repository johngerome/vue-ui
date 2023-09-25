<script setup lang="ts">
import { ListLoop } from '@/components'
</script>

<template>
  <ListLoop :items="['test 1', 'test 2']" />
  <ListLoop :items="[{key: [ 'key 1', 'key 2' ] }]" />
</template>
