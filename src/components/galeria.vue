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

<style>
    .beerNav > .router-link-exact-active:nth-child(5) ~ .glass {
    transform: translateY(7px) translateX(calc((var(--globalWidth) - 200px) / 12*1 + 100px)) perspective(60px) rotatex(-15deg);
    }
</style>

<style scoped>
    h1 {
      color: purple;
    }
</style>
