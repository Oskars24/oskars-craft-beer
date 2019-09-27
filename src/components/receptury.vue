<template>
    <div class="recepturyPage">
        <div class="articleTitle">WYBIERZ RECEPTURĘ</div>
        <router-link :to="'/receptury/' + beer.id" tag="div" class="beerLabel" v-for="beer in beerList" :key="beer.id">
            <div class="beerImg"><img :src="labelSrc(beer.id)"></div>
            <div class="beerTitle">{{ beer.title }}</div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'receptury',
    data () {
        return {
            beerList: this.sortBeer(require("@/content/list.json")),
        }
    },
    methods: {
        sortBeer: function(array) {
            if (array[0].id != 1) {
                array.sort(function(a,b){return a[1] - b[1]})
                console.log(array)
            }
            if (array[0].id === 1) {
                    array.reverse()
                }
            return array
        },
        labelSrc: function(number) {
            return require("@/content/labels/label_"+number+".jpg")
        },
    }
}

</script>

<style>
.beerNav > .router-link-active:nth-child(3) ~ .glass {
transform: translateY(7px) translateX(calc((var(--globalWidth) - 200px) / 12*-1 - 100px)) perspective(60px) rotatex(-15deg);
}
</style>

<style scoped>
.recepturyPage {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    justify-items: center;
    color: #707070
}

.beerLabel {
    width: 140px;
    margin: 5px 5px 0 5px;
    text-align: center;
    background-color: white;
    border: solid 2px transparent;
    padding: 20px 10px 10px 10px;
}

.beerLabel:hover {
    background-color: #FAA432;
    border: solid 2px #fff152;
}

.beerLabel:hover > .beerImg {
    transform: scale(1.05);
    transform-origin: bottom;
}

.beerLabel:hover > .beerTitle {
    color: white;
    text-shadow: 1px 1px 2px #00000080;
}

.beerLabel:active > .beerTitle {
    color: #fff152;
}

.beerImg {
    transition: transform 0.3s ease-in-out;
}

.beerImg > img {
    width: 100%;
}

.beerTitle {
    font-weight: bold;
    padding: 0 10px 10px 10px;
}

.articleTitle {
    font-size: 25px;
    grid-column: 1/-1;
    text-align: center;
}
</style>
