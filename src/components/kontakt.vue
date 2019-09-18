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

<style>
    .beerNav > .router-link-exact-active:nth-child(7) ~ .glass {
    transform: translateY(7px) translateX(calc((70vw - 200px) / 12*5 + 100px)) perspective(60px) rotatex(-15deg);
    }
</style>

<style scoped>
    h1 {
      color: greenyellow;
    }
</style>
