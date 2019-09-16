<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'warki',
  data () {
    return {
      msg: 'Witaj w warki.vue'
    }
  }
}
</script>

<style scoped>
    h1 {
      color: blue;
    }
</style>
