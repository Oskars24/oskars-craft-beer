<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'galeria',
  data () {
    return {
      msg: 'Witaj w galeria.vue'
    }
  }
}
</script>

<style scoped>
    h1 {
      color: purple;
    }
</style>
