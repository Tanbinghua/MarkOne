<template>
  <div v-focus contenteditable="true" @input="update" @blur="$emit('edited')" @keyup.esc="$emit('cancel')"></div>
</template>

<script>
export default {
  props: ['content'],
  methods: {
    update (event) {
      this.$emit('update', event.target.innerText)
    }
  },
  mounted () {
    this.$el.innerText = this.content
  },
  directives: {
    focus: {
      inserted (el) {
        el.focus()
      }
    }
  }
}
</script>
