<template>
    <div class="checkPage">
        <div class="headerLogo">
            <span>Oskar's</span><br><span>Craft Beer</span>
        </div>
        <div class="alert">
            <span class="alertTitle">Czy masz ukończone 18 lat?</span>
            <div class="articleButton" @click="checkSet">TAK</div>
            <a href="https://www.google.com" class="articleButton">NIE</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'check',
    methods: {
            checkSet() {
                window.localStorage.setItem("check", true);
                this.$router.push({ name: "start" });
            }
        }
}
</script>

<style scoped>
.checkPage {
    display: flex;
    flex-flow: column;
    position: fixed;
    justify-content: center;
    align-items: center;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
    background-color: white;
}
.headerLogo {
    display: block;
    margin: 0;
}
.alert {
    background-color: #474745;
    color: white;
    display: grid;
    padding: 10px;
    margin: 10px;
}

.alertTitle {
    grid-column: 1/3;
}

.articleButton {
    margin: 10px;
}
</style>