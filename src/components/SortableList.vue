<template>
  <ul class="list">
    <slot></slot>
  </ul>
</template>

<script>

export default {
}
</script>

<style>
.list {
  list-style: none;
  padding: 0;
  position: relative;
  z-index: 1;
}
</style>
