<template>
  <div class="highlight">
    <ul class="light">
      <note-list v-for="item in data" :key="item.id" :context="item.context" type="highlight"></note-list>
    </ul>
  </div>
</template>

<script>
import NoteList from '../components/NoteList'

export default {
  data () {
    return {
      data: [
        {context: 'Labeling involves putting a name to something. Instead of thinking, "He made a mistake," you might label your neighbor as "an idiot."', notes: '1'},
        {context: 'Labeling involves putting a name to something. Instead of thinking, "He made a mistake," you might label your neighbor as "an idiot."', notes: '2'},
        {context: 'Sometimes we see things as being black or white: Perhaps you have two categories of coworkers in your mind—the good ones and the bad ones. It\'s easy to take one particular event and generalize it to the rest of our life. If you failed to close one deal, you may decide, "I\'m bad at closing deals." Labeling involves putting a name to something. "', notes: '3'}
      ]
    }
  },
  components: {
    NoteList
  }
}
</script>

<style lang="scss" scoped>
.highlight {
  padding: 6.7% 14.9% 6.7% 6.7%;
}
.light {
  list-style-type: none;
  position: relative;
  z-index: 1;
}
</style>
