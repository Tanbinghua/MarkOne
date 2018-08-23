<template>
  <li v-if="!isTrash" :class="{'list-item': true, 'has-left-radius': isHighlight, 'border-left-radius': isHighlight, editing: editing}">
    <edit-able v-if="editing" class="list-item-edit" :content="content" @update="content = $event" @edited="edited" @cancel="cancel"></edit-able>
    <div v-if="img && !editing" :class="{'list-item-img-box': true, 'border-box-radius': isHighlight}">
      <img :src="img" alt="Markone" class="list-item-img" @click="$emit('clickShowImg')">
    </div>
    <p v-if="!img && !editing" class="list-item-text" @dblclick="edit">{{content}}</p>
    <div v-if="!editing" class="list-item-delete" @click="$emit('toTrash')" title="Move to trash"><span>×</span></div>
    <div v-if="!editing" class="list-item-box">
      <span class="list-item-box-icon" @click="highlight" :title="isHighlight ? 'Unmark' : 'Mark'">
        <icon-svg :icon-class="isHighlight ? 'highlighted' : 'highlight'"></icon-svg>
      </span>
      <span :class="{'list-item-box-icon': true, 'ban': !isVideo}" title="Return to video">
        <a v-if="isVideo" :href="jumpLink" class="list-item-box-icon-link" target="_blank"></a>
        <icon-svg icon-class="back-to-video"></icon-svg>
      </span>
    </div>
  </li>
</template>

<script>
import { toHighlight } from '../api/interface'
import EditAble from './EditAble'

export default {
  data () {
    return {
      editing: false,
      content: null
    }
  },
  props: ['item', 'isHighlight', 'img', 'isVideo', 'origin', 'startTime', 'isTrash', 'notesUuid', 'itemUuid'],
  components: {
    EditAble
  },
  methods: {
    highlight () {
      this.$emit('tohighlight')
    },
    edit () {
      this.content = this.item
      this.editing = true
    },
    edited () {
      this.editing = false
      if (this.content === this.item) return
      const data = {
        user: this.$store.getters.uuid,
        notes: this.notesUuid,
        remark: this.content
      }
      toHighlight(this.itemUuid, data).then(res => {
        if (res.status === 200) {
        }
      }).catch(() => {
        this.content = this.item
      })
    },
    cancel () {
      this.editing = false
      this.content = this.item
    }
  },
  computed: {
    jumpLink () {
      if (this.origin.indexOf('youtu') !== -1) {
        const query = this.origin.split('=')[1]
        return 'https://youtu.be/' + query + '?t=' + Math.floor(this.startTime)
      } else return this.origin
    }
  },
  mounted () {
    this.content = this.item
  }
}
</script>

<style lang="scss" scoped>
.has-left-radius {
  border-left: 4px solid #FF6E03;
}
.border-left-radius {
  border-top-left-radius: 4px!important;
  border-bottom-left-radius: 4px!important;
}
.border-box-radius {
  border-top-left-radius: 0px!important;
  border-bottom-left-radius: 0px!important;
}
.editing {
  box-shadow: 0 0 15px 0 rgba(153,153,153,0.50);
  &:hover {
    border-top-right-radius: 8px!important;
    border-bottom-right-radius: 8px!important;
  }
}
.list-item {
  background: #fff;
  border-radius: 8px;
  color: #666;
  display: block;
  font-size: 16px;
  line-height: 24px;
  margin: 0 0 16px;
  position: relative;
  &-text {
    padding: 24px 32px;
  }
  &-img {
    display: block;
    width: 100%;
    &:hover {
      cursor: zoom-in;
    }
    &-box {
      border-radius: 8px;
      max-height: 200px;
      overflow: hidden;
    }
  }
  &-box {
    border-radius: 0 10px 10px 0;
    display: flex;
    height: 100%;
    overflow: hidden;
    position: absolute;
    right: 0;
    top: 0;
    transition: all .3s ease;
    width: 112px;
    z-index: -1;
    &-icon {
      flex: 1;
      position: relative;
      text-align: center;
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
      &-link {
        height: 100%;
        display: inline-block;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: 1;
      }
    }
    & .ban { cursor: not-allowed; }
    &-icon:nth-of-type(1) svg {
      height: 28px;
      width: 22px;
    }
    &-icon:nth-of-type(2) svg {
      height: 26px;
      width: 30px;
    }
  }
  &-delete {
    background: rgba(236, 237, 241, 0.60);
    border-radius: 15px;
    color: rgba(0, 0, 0, 0.3);
    display: none;
    font-size: 24px;
    height: 23px;
    line-height: 23px;
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
  &:hover > &-img-box {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }
  &:hover > &-box {
    background: rgba(26,34,112,0.10);
    right: -112px;
  }
  &:hover > &-delete { display: block; }
  &-edit {
    height: 100%;
    outline: none;
    padding: 24px 32px;
  }
}
</style>
