<template>
    <div class="warkiPage">
        <div class="empty"></div>
        <div class="beerList">
            <select size=15 v-on:change="changeBottle($event)" v-model="beerSelected">
                <option v-for="beer in beerList" :key="beer.id" :value="beer.id">{{ beer.id + ". " +beer.title }}</option>
            </select>
        </div>
        <div class="beerBottle"><img :src="bottleSrc(beerSelected)"></div>
        <div class="beerTitle">{{ beerData.title }}</div>
        <div class="beerProp">
            <strong>STYL:</strong><br>
            {{ beerData.styl }}<br>
            <strong>EKSTRAKT:</strong><br>
            {{ beerData.ekstrakt }}<br>
            <strong>ALKOHOL:</strong><br>
            {{ beerData.alkohol }}<br>
            <strong>IBU:</strong><br>
            {{ beerData.ibu }}<br>
            <strong>DATA WARZENIA:</strong><br>
            {{ beerData.dataw }}<br>
            <strong>DATA ROZLEWU:</strong><br>
            {{ beerData.datar }}<br>
            <strong>MIEJSCE:</strong><br>
            {{ beerData.miejsce }}<br>
            <strong>UZYSKANO:</strong><br>
            {{ beerData.uzyskano }}<br>
        </div>
        <div class="beerComp">
            <strong>SKŁAD:</strong><br>
            {{ beerData.sklad }}
        </div>
        <div class="beerDesc">
            <strong>OPIS:</strong>
            {{ beerData.opis }}
            <router-link to="/receptury" tag="div" class="articleButton">Receptura</router-link>
        </div>
        
    </div>
</template>

<script>

export default {
    name: 'warki',
    data () {
        return {
            beerList: this.sortBeer(require("@/content/list.json")),
            beerSelected: this.selectBeer(this.$route.params.id)
        }
    },
    computed: {
        beerData() {
            return require("@/content/book/"+this.beerSelected+".json")
        } 
    },
    methods: {
        sortBeer: function(array) {
            if (array[0].id != 1) {
                array.sort(function(a,b){return a[1] - b[1]}).reverse()
            }
            return array
        },
        changeBottle: function changeBottle(event) {
            this.beerSelected = event.target.value;
        },
        bottleSrc: function(number) {
            return require("@/content/bottles/beer_"+number+".png")
        },
        selectBeer: function(check) {
            if (typeof check == 'number' && check <= this.beerList.len) {return check}
            else {return 1}
        }
    },
}
</script>

<style>
.beerNav > .router-link-exact-active:nth-child(2) ~ .glass {
transform: translateY(7px) translateX(calc((var(--globalWidth) - 200px) / 12*-3 - 100px)) perspective(60px) rotatex(-15deg);
}
</style>

<style scoped>
.warkiPage {
    display: grid;
    grid-template-columns: max-content max-content auto auto;
    grid-template-rows: max-content max-content auto;
}

.empty {
    grid-column: 1/5;
    grid-row: 2/4;
    background-color: #FA9C1E;
}

.beerList {
    grid-column: 1/2;
    grid-row: 1/4;
    padding: 10px;
}

.beerBottle {
    grid-column: 2/3;
    grid-row: 1/4;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.beerTitle {
    grid-column: 3/5;
    grid-row: 1/2;
    color: #707070;
    font-size: 25px;
    margin: 10px;
}

.beerProp {
    grid-column: 3/5;
    grid-row: 2/3;
    column-count: 2;
    padding: 10px;
}

.beerComp {
    grid-column: 3/4;
    grid-row: 3/4;
    background-color: #80807E;
    color: white;
    border: solid 2px white;
    border-right: none;
    padding: 10px;
    margin-bottom: 10px;
}

.beerDesc {
    grid-column: 4/5;
    grid-row: 3/4;
    background-color: #80807E;
    color: white;
    border: solid 2px white;
    border-left: none;
    padding: 10px;
    margin: 0 10px 10px 0;
    display: flex;
    flex-flow: column;
}

.articleButton {
    margin: auto 0 0 auto;
}
</style>