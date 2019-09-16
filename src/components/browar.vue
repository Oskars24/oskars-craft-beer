<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'browar',
  data () {
    return {
      msg: 'Witaj w browar.vue'
    }
  }
}
</script>

<style scoped>
    h1 {
      color: orange;
    }
</style>
