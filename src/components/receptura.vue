<template>
    <div class="recepturaPage">
        <div class="beerTitle">{{ beerData.title }}</div>
        <div class="beerRes">
            <strong>SUROWCE:</strong>
            <ul>
                <li v-for="res in beerData.surowce" :key="res">{{ res }}</li>
            </ul>
        </div>
        <div class="beerCourse">
            <strong>PRZEBIEG WARZENIA:</strong>
            <ol>
                <li v-for="course in beerData.przepis" :key="course">{{ course }}</li>
            </ol>
        </div>
        <div class="beerProc">
            <strong>ZACIERANIE:</strong>
            <ul>
                <li v-for="value in beerData.zacieranie" :key="value">{{ value }}</li>
            </ul><br>
            <strong>CHMIELENIE:</strong>
            <ul>
                <li v-for="value in beerData.chmielenie" :key="value">{{ value }}</li>
            </ul><br>
            <strong>FERMENTACJA:</strong>
            <ul>
                <li v-for="value in beerData.fermentacja" :key="value">{{ value }}</li>
            </ul><br>
            <strong>NOTATKI:</strong>
            <ul>
                <li v-for="value in beerData.notatki" :key="value">{{ value }}</li>
            </ul><br>
        </div>
        <div class="buttonLine">
            <div class="articleButton">Pobierz PDF</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'receptura',
    data () {
        return {
            beerSelected: this.$route.params.id
        }
    },
    computed: {
        beerData() {
            return require("@/content/book/"+this.beerSelected+".json")
        } 
    },
}
</script>

<style>
.beerNav > .router-link-active:nth-child(3) ~ .glass {
transform: translateY(7px) translateX(calc((var(--globalWidth) - 200px) / 12*-1 - 100px)) perspective(60px) rotatex(-15deg);
}
</style>

<style scoped>
ul, ol {
    list-style-type: square;
    margin-block-start: auto;
    margin-block-end: auto;
    padding-inline-start: 17px;
}

ol {
    list-style-type: decimal;
}

ul > li:before {
    content: "";
    margin-left: -5px;
}

.recepturaPage {
    display: grid;
    grid-template-columns: auto auto 30%;
    grid-template-rows: max-content max-content auto auto;
}

.beerTitle {
    grid-area: 1/1/2/3;
    font-size: 25px;
    color: #707070;
    border-bottom: solid 2px #FBB049;
    margin: 10px;
}

.beerRes {
    grid-area: 2/1/3/3;
    padding: 10px;
}

.beerCourse {
    grid-area: 3/1/4/3;
    background-color: #878785;
    color: white;
    padding: 10px;
}

.beerProc {
    grid-area: 1/3/4/4;
    background-color: #FBB049;
    padding: 10px;
}

.buttonLine {
    grid-area: 4/1/5/4;
    background-color: #FBB049;
    margin-top: 10px;
    padding: 10px 0 10px 0;
}

.articleButton {
    margin: auto;
    color: white;
}
</style>
