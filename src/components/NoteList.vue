<template>
  <li v-if="(type === 'highlight' && !isTrash) || type === 'trash'"
    :class="{'light-list': true, 'has-left-radius': type === 'highlight', 'no-left-radius': type === 'trash'}">
    <div v-if="img" :class="{'light-list-img-box': true, 'border-left-radius': isHighlight && type === 'highlight'}">
      <img :src="img" alt="Markone" class="list-item-img" @click="$emit('clickShowImg')">
    </div>
    <p v-else>{{ context }}</p>
    <div v-if="type === 'highlight'" class="light-list-delete" @click="$emit('toTrash')" title="Move to trash"><span>✖</span></div>
    <div class="light-list-box highlight" v-if="type === 'highlight'">
      <span class="light-list-box-icon" @click="$emit('tohighlight')" title="Unmark">
        <icon-svg icon-class="highlighted"></icon-svg>
      </span>
      <span class="light-list-box-icon" @click="$router.push(`/detail/${title}`)" title="Return notes">
        <icon-svg icon-class="back-to-note"></icon-svg>
      </span>
    </div>
    <div class="light-list-box trash" v-if="type === 'trash'">
      <span class="light-list-box-icon" @click="$emit('reduction')" title="Revert"><icon-svg icon-class="return-to-note"></icon-svg></span>
    </div>
  </li>
</template>

<script>
export default {
  props: ['context', 'type', 'img', 'isHighlight', 'isTrash', 'title']
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
  position: relative;
  & p { padding: 24px 32px; }
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
      position: relative;
      transition: all .3s ease;
      &:hover {
        background: #FEECDC;
        cursor: pointer;
        opacity: 1;
      }
      & svg {
        left: 50%;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
    &-icon:nth-of-type(1) svg {
      height: 28px;
      width: 22px;
    }
    &-icon:nth-of-type(2) svg {
      height: 26px;
      width: 30px;
    }
  }
  &-img-box {
    border-radius: 8px;
    max-height: 200px;
    overflow: hidden;
    transition: all .3s ease;
  }
  &-delete {
    background: rgba(26,34,112,0.10);
    border-radius: 4px;
    color: rgba(0, 0, 0, 0.3);
    display: none;
    height: 25px;
    line-height: 25px;
    right: 4px;
    position: absolute;
    text-align: center;
    top: 4px;
    width: 25px;
    &:hover { cursor: pointer; }
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
  &:hover > &-img-box {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }
  &:hover &-delete { display: block; }
}
.list-item-img {
  display: block;
  width: 100%;
  &:hover {
    cursor: zoom-in;
  }
}
.border-left-radius {
  border-top-left-radius: 4px!important;
  border-bottom-left-radius: 4px!important;
}
</style>
