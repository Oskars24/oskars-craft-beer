<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'receptury',
  data () {
    return {
      msg: 'Witaj w receptury.vue'
    }
  }
}
</script>

<style scoped>
    h1 {
      color: green;
    }
</style>
