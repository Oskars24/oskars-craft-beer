<template>
    <div id="app">
        <router-link to="/">Start</router-link>
        <router-link to="/warki">Warki</router-link>
        <router-link to="/receptury">Receptury</router-link>
        <router-link to="/galeria">Galeria</router-link>
        <router-link to="/browar">Browar</router-link>
        <router-link to="/kontakt">Kontakt</router-link>

        <router-view/>
    </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
