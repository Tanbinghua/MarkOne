<template>
  <div class="no-data">
    <p v-if="loading">Loding ...</p>
    <p v-if="nodata">-- No data --</p>
  </div>
</template>

<script>
export default {
  props: ['loading', 'nodata']
}
</script>

<style scoped>
.no-data {
  color: #999;
  font-size: 20px;
  margin-top: 40px;
  text-align: center;
}
</style>
