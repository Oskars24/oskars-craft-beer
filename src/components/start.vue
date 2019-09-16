<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'start',
  data () {
    return {
      msg: 'Witaj w start.vue'
    }
  }
}
</script>

<style scoped>
    h1 {
      color: red;
    }
</style>
