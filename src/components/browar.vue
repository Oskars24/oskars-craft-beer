<template>
    <div class="browarPage">
        <div class="articleTitle">BROWAR DOMOWY</div>
        <div class="empty"></div>
        <div class="articleImg"><img src="../assets/tank.png"></div>
        <div class="articleDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elit elit, gravida sed ullamcorper sollicitudin, mollis ac ante. Suspendisse nec justo vitae ipsum sodales vehicula eget nec augue. Proin tempus, sem et tincidunt suscipit, augue nunc dictum ipsum, sit amet tempus orci ante non ligula. Integer vitae euismod odio, vel elementum ligula. Nam non condimentum urna, ac aliquam mauris.</div>
        <template class="equipContent" v-for="equi in equiList">
            <div class="equipImg" :key="equi.id">
                <img :src="equiSrc(equi.id)">
            </div>
            <div class="equipDesc" :key="equi.id">
                <strong>{{ equi.title + ":" }}</strong><br>
                {{ equi.description }}
            </div>
        </template>
    </div>
</template>

<script>
export default {
    name: 'browar',
    data () {
        return {
            equiList: require("@/content/equipment/equipment.json")
        }
    },
    methods: {
        equiSrc: function(number) {
            return require("@/content/equipment/equi_"+number+".png")
        }
    }
}
</script>

<style>
.beerNav > .router-link-active:nth-child(6) ~ .glass {
    transform: translateY(7px) translateX(calc((var(--globalWidth) - 200px) / 12*3 + 100px)) perspective(60px) rotatex(-15deg);
}
</style>

<style scoped>
.browarPage {
    display: grid;
    grid-template-columns: calc(25% - 5px) auto calc(25% - 5px);
    grid-template-rows: max-content;
    grid-auto-flow: dense;
}

.articleTitle {
    grid-column: 2/-1;
    grid-row: 1/2;
    font-size: 25px;
    color: #707070;
    padding: 10px;
}

.empty {
    grid-column: 1/2;
    grid-row: 2/3;
    background-color: #80807E;
    margin: 5px 0 8px 0;
}

.articleImg {
    grid-column: 1/2;
    grid-row: 1/3;
    padding: 10px;
    margin: 5px 0 8px 0;
}

.articleImg > img {
    width: 100%;
}

.articleDesc {
    grid-column: 2/-1;
    background-color: #FA9C1C;
    padding: 10px;
    margin: 5px 0 8px 0;
}

.equipImg > img {
    width: 100%;
}

.equipImg:nth-of-type(4n-3) {
    grid-column: 1/2;
    background-color: #FA9C1C;
    padding: 10px;
    margin: 8px 5px 8px 0;
}

.equipDesc:nth-of-type(4n-2) {
    grid-column: 2/-1;
    background-color: #80807E;
    color: white;
    padding: 10px;
    margin: 8px 0 8px 5px;
}

.equipImg:nth-of-type(4n-1) {
    grid-column: 3/-1;
    background-color: #FA9C1C;
    padding: 10px;
    margin: 8px 0 8px 5px;
}

.equipDesc:nth-of-type(4n-4) {
    grid-column: 1/3;
    background-color: #80807E;
    color: white;
    padding: 10px;
    margin: 8px 5px 8px 0;
}

@media (max-width: 580px) {
    .browarPage {
        grid-template-columns: calc(33% - 5px) auto calc(33% - 5px);
    }
}
</style>
