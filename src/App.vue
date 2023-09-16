<template>
  <div id="app">
    <message-toggle/>
    <list :items="['list item 1', 'listen item 2']" />
  </div>
</template>

<script>
import MessageToggle from '@/components/MessageToggle.vue'
import List from '@/components/List.vue'

export default { // экспортирует components (MessageToggle с name='message-toggle') в template
  components: {
    // в MessageToggle "export default {name='message-toggle'}" НЕ РАБОТАЕТ.
    // Имя {name: 'message-toggle'} закоммичено.
    // Используемое имя <message-toggle1/> в template сконвертировано из имени файла MessageToggle1.
    MessageToggle,
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
