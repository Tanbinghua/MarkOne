<template>
  <ul class="list">
    <slot></slot>
  </ul>
</template>

<script>
import { ContainerMixin } from 'vue-slicksort'

export default {
  mixins: [ContainerMixin]
}
</script>

<style>
.list {
  list-style: none;
  padding: 0;
  position: relative;
  overflow: hidden;
  z-index: 1;
}
</style>
