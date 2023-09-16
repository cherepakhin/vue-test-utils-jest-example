<template>
  <div>
    <message :msg="msg"></message>
    <button id="btn-message" @click="toggleMessage">
      name btn 'Change message"
    </button>
  </div>
</template>

<script>
import Message from '@/components/Message.vue'

export default {
  // почему-то 'name' никак не влияет на использование в App.vue.
  // Конвертирует по имени файла??? ДААА! MessageToggle1 -> <message-toggle1/>, 
  // если явно не указано "name"
  // Переименовал файл в MessageToggle1 и в App теперь используется <message-toggle1/> !!!
  // Закомментил name и все-равно работает.!!!
  // name: 'message-toggle1', // это исходная строка,
  // ее закоментил и компонент MessageToggle1.vue доступен <message-toggle1/>
  name: 'message-toggle',
  data: () => ({
    msg: null
  }),
  methods: {
    toggleMessage () {
      this.msg = this.msg === 'message' ? 'toggled message' : 'message'
    }
  },
  components: {
    Message
  }
}
</script>
