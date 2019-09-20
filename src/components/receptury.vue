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
      msg: 'Witaj w warki.vue'
    }
  },

  }

</script>

<style>
    .beerNav > .router-link-exact-active:nth-child(3) ~ .glass {
    transform: translateY(7px) translateX(calc((var(--globalWidth) - 200px) / 12*-1 - 100px)) perspective(60px) rotatex(-15deg);
    }
</style>

<style scoped>
    h1 {
      color: gold;
    }
</style>
