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

<style>
    .beerNav > .router-link-exact-active:first-child ~ .glass {
        transform: translateY(7px) translateX(calc((70vw - 200px) / 12*-5 - 100px)) perspective(60px) rotateX(-15deg);
    }
</style>

<style scoped>
    h1 {
        color: red;
    }
</style>
