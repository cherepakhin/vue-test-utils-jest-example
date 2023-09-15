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
