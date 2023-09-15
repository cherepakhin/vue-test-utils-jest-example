<template>
  <div id="app">
    <!-- message-toggle определено в
      "export default" /components/MessageToggle/name='message-toggle' -->
    <message-toggle />
    <list :items="['list item 1', 'listen item 2']" />
  </div>
</template>

<script>
import MessageToggle from '@/components/MessageToggle.vue'
import List from '@/components/List.vue'

export default { // экспортирует components в template
  components: {
    MessageToggle, // в MessageToggle "export default {name='message-toggle'}"
    List
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>
