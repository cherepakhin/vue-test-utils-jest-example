<template>
  <h1> {{ msg || 'default message' }}</h1>
</template>

<script>
export default {
  name: 'MessageVue',
  props: [
    'msg'
  ]
}
</script>
