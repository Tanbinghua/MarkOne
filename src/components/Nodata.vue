<template>
  <div class="no-data">
    <p v-if="loading">Loding ...</p>
    <p v-if="nodata">-- No data --</p>
    <div class="load-more" v-if="next">
      <h3 v-if="!loadingmore" class="load-more-btn" @click="$emit('loadMore') ">Load more</h3>
      <h3 v-if="nomoredata">-- No more data --</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: ['loading', 'nodata', 'next', 'loadingmore', 'nomoredata']
}
</script>

<style lang="scss" scoped>
.no-data {
  color: #999;
  font-size: 20px;
  margin-top: 40px;
  text-align: center;
}
.load-more {
  color: #999;
  margin-top: 40px;
  text-align: center;
  &-btn:hover { cursor: pointer; }
}
</style>
