// 'boot message' значение при загрузке. Потом меняется методом MessageToggle1.toggleMessage().
<template>
  <h1> {{ msg || 'boot message' }}</h1>
</template>

<script>
export default {
  name: 'MessageVue',
  props: [
    'msg'
  ]
}
</script>
