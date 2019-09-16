<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'kontakt',
  data () {
    return {
      msg: 'Witaj w kontakt.vue'
    }
  }
}
</script>

<style scoped>
    h1 {
      color: greenyellow;
    }
</style>
