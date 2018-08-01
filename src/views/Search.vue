<template>
  <div class="search">
    <div class="back-to-notes" @click="$router.push('/')">
      <span class="back-to-notes-icon"><icon-svg icon-class="down"></icon-svg></span>
      <span>Back to notes</span>
    </div>
  </div>
</template>

<script>
import {Central} from '../components/Central'

export default {
  data () {
    return {
      data: [],
      searchVal: null
    }
  },
  mounted () {
    Central.$on('search-notes', (searchVal) => {
      this.searchVal = searchVal
    })
  }
}
</script>

<style lang="scss" scoped>
.search {
  padding: 0 40px 100px;
}
.back-to-notes {
  display: inline-block;
  color: #1A2270;
  font-size: 14px;
  margin-top: 48px;
  transition: all .3s ease;
  &-icon svg {
    height: 6px;
    transform: rotate(-90deg);
    vertical-align: 2px;
    width: 10px;
  }
  &:hover {
    color: #FF6E03;
    cursor: pointer;
  }
}
</style>
