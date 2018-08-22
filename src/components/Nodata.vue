<template>
  <div class="no-data">
    <p v-if="loading">Loding ...</p>
    <p v-if="nodata">-- No data --</p>
    <div class="load-more" v-if="next">
      <p v-if="!loadingmore" class="load-more-btn" @click="$emit('loadMore') ">Load more</p>
      <p v-if="nomoredata">-- No more data --</p>
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
