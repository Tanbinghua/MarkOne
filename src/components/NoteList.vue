<template>
  <li :class="{'light-list': true, 'has-left-radius': type === 'highlight', 'no-left-radius': type === 'trash'}">
    <p>{{ context }}</p>
    <div class="light-list-box highlight" v-if="type === 'highlight'">
      <span class="light-list-box-icon"></span>
      <span class="light-list-box-icon"></span>
    </div>
    <div class="light-list-box trash" v-if="type === 'trash'">
      <span class="light-list-box-icon"></span>
    </div>
  </li>
</template>

<script>
export default {
  props: ['context', 'type']
}
</script>

<style lang="scss" scoped>
.has-left-radius {
  border-left: 4px solid #FF6E03;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
.no-left-radius {
  border-radius: 8px;
}
.highlight { width: 112px; }
.trash { width: 56px; }
.light-list {
  background: #fff;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
  color: #666;
  line-height: 24px;
  margin-bottom: 16px;
  padding: 24px 50px;
  position: relative;
  &-box {
    border-radius: 0 10px 10px 0;
    display: flex;
    height: 100%;
    overflow: hidden;
    position: absolute;
    right: 0;
    top: 0;
    transition: all .3s ease;
    z-index: -1;
    &-icon {
      background: rgba(26,34,112,0.10);
      flex: 1;
      transition: all .3s ease;
      &:hover {
        background: #FEECDC;
        cursor: pointer;
        opacity: 1;
      }
    }
  }
  &:hover {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }
  &:hover > .highlight {
    border-radius: 0;
    right: -112px;
  }
  &:hover > .trash {
    border-radius: 0;
    right: -56px;
  }
}
</style>
