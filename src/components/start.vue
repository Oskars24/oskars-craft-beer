<template>
    <div class="startPage">
        <div>
        <div class="sliderContainer">
            <transition-group class='slider' tag="div">
                <div class="sliderBottle" v-for="beer in beerList" :key="beer.id">
                    <router-link :to="'/warki/' + beer.id" tag="div" class="oneBeerDiv">
                        <img class="sliderBeerImg" :src="bottleSrc(beer.id)">
                        <span class="sliderBeerText">{{ beer.title }}</span>
                    </router-link>
                </div>
            </transition-group>
            <div class='prev' @click="previous"></div>
            <div class='next' @click="next"></div>
            </div>
            <div class="mainArticle">
                <div class="empty"></div>
                <div class="articleImg"><img src="../assets/paper.png"></div>
                <div class="articleTitle">SPRAWDŹ NASZE RECEPTURY!</div>
                <div class="articleContent">
                    <span class="articleText">Wiedzą należy się dzielić! Stąd też w poniższym dziale opublikowane zostały receptury wszystkich piw, jakie uwarzone zostały w niniejszym browarze domowym. Niektóre z nich są autorskie, natomiast większość z uwagi na początki inspirowana była różnymi, opublikowanymi w internecie przepisami. Natomiast szczegółowy przebieg warzenia to już wypadkowa nabytych prze ze mnie umiejętności.<br><br>Starałem się opisać jak najwięcej szczegółów, natomiast w przypadku pytań zapraszam do kontaktu. Udanych warek!</span>
                    <router-link to="/receptury" tag="div" class="articleButton">Więcej...</router-link>
                </div>
            </div>
            <div class="mainArticle">
                <div class="equipTitle">SPRAWDZONY SPRZĘT!</div>
                <div class="equipContent">
                    <span class="articleText">Zapraszam do browaru! Czyli zobacz, na czym można uwarzyć piwo! Choć „browar” to może zbyt duże słowo, to z przymiotnikiem „domowy” nabiera całkiem innego znaczenia.<br><br>W tym dziale opisane zostały wszystkie najważniejsze „sprzęty piwowarskie” jakich używam. Niektóre z nich są absolutnie niezbędne, a niektóre przydają się tylko w określonych warunkach. Opis przydatny zwłaszcza dla początkujących piwowarów!</span>
                    <router-link to="/browar" tag="div" class="articleButton">Więcej...</router-link>
                </div>
                <div class="equipImg"><img src="../assets/pot.png"></div>
            </div>
            <div class="mainGallery">
                <div class="galleryLeft"></div>
                <router-link to="/galeria" tag="div" class="galleryContainer"><img src="../content/gallery/thumbs/photo_28.jpg" class="galleryImg"></router-link>
                <router-link to="/galeria" tag="div" class="galleryContainer"><img src="../content/gallery/thumbs/photo_11.jpg" class="galleryImg"></router-link>
                <router-link to="/galeria" tag="div" class="galleryContainer"><img src="../content/gallery/thumbs/photo_34.jpg" class="galleryImg"></router-link>
                <router-link to="/galeria" tag="div" class="galleryContainer"><img src="../content/gallery/thumbs/photo_37.jpg" class="galleryImg"></router-link>
                <div class="galleryRight"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'start',
    data () {
        return {
            beerList: this.orderBeerList(require("@/content/list.json")),
        }
    },
    methods: {
        orderBeerList: function(tablica) {
            if (1 === 1) {
                if (tablica[0].id === 1) {
                    tablica.reverse()
                }
                tablica.slice(0,11)
                tablica = [].concat(tablica.slice(6,11),tablica.slice(0,6))
            }
            return tablica
        },

        bottleSrc: function(number) {
            return require("@/content/bottles/beer_"+number+".png")
        },
        next () {
            const first = this.beerList.shift()
            this.beerList = this.beerList.concat(first)
        },
        previous () {
            const last = this.beerList.pop()
            this.beerList = [last].concat(this.beerList)
        }
    }
}
</script>

<style>
.beerNav > .router-link-active:first-child ~ .glass {
    transform: translateY(7px) translateX(calc((var(--globalWidth) - 200px) / 12*-5 - 100px)) perspective(60px) rotateX(-15deg);
}
</style>

<style scoped>
.startPage {
    display: grid;
    justify-content: center;
    align-content: start;
    grid-template-columns: 100%;
}

.sliderContainer {
    position: relative;
}

.slider {
    display: flex;
    justify-content: center;
    overflow: hidden;
    border-bottom: solid #FA9C1E 2px;
}

.sliderBottle {
    pointer-events: none;
    cursor: pointer;
    text-align: center;
    margin-left: 4vw;
    margin-right: 4vw;
    transition: transform 0.5s ease-in-out;
}

.oneBeerDiv {
    transform: scale(0.7);
    opacity: 0.25;
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
}

.sliderBeerText {
    font-weight: bold;
}

.sliderBeerImg:hover {
    filter: drop-shadow(3px 1px 0px #fff152);
}

.oneBeerDiv:hover > .sliderBeerText {
    text-shadow: 3px 1px 1px #fff152;
}

.sliderBottle:first-of-type, .sliderBottle:last-of-type {
    opacity: 0;
}

.sliderBottle:nth-child(5) > .oneBeerDiv, .sliderBottle:nth-child(7) > .oneBeerDiv{
    transform: scale(0.8);
    opacity: 0.5;
}

.sliderBottle:nth-child(6) > .oneBeerDiv {
    pointer-events: auto;
    transform: scale(0.9);
    opacity: 1;
}

.mainArticle {
    display: grid;
    grid-template-columns: 5% repeat(4, 1fr) 5%;
    grid-template-rows: auto 1fr;
    margin-top: 20px;
}

.empty {
    grid-column: 1/3;
    grid-row: 2/3;
    background-color: #FA9C1E;
}

.articleImg {
    grid-column: 1/3;
    grid-row: 1/3;
    text-align: center;
    padding: 15px 0 10px 10%;
    border-top: solid 2px #FA9C1E;
   
}

.articleImg > img, .equipImg > img  {
    width: 100%;
    max-width: 160px;
}

.articleTitle {
    border-top: solid 2px #FA9C1E;
    grid-column: 3/7;
    padding: 15px 20px 5px 20px;
    color: #707070;
    font-size: 25px;
}

.articleContent {
    grid-column: 3/7;
    background-color: #FA9C1E;
    padding: 20px;
    color: white;
    display: flex;
    flex-flow: column;
}

.articleText {
    margin-bottom: 10px;
}


.equipTitle {
    grid-column: 1/5;
    padding: 15px 20px 0px 20px;
    color: white;
    font-size: 25px;
    background-color: #474745;
}

.equipContent {
    grid-column: 1/5;
    color: white;
    display: flex;
    flex-flow: column;
    padding: 20px;
    background-color: #474745;
}
.equipImg {
    grid-column: 5/7;
    grid-row: 1/4;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 10% 20px 10%;
    background-color: #80807E;
}

.equipContent > .articleButton {
    margin: auto auto 0 0;
}

.mainGallery {
    display: grid;
    grid-template-columns: 5% repeat(4, 1fr) 5%;
    margin-top: 20px;
}

.galleryLeft {
    grid-column: 1/2;
    background-color: #FA9C1E;
    height: 100%;
    margin-right: 6px;
}

.galleryRight {
    grid-column: -2/-1;
    background-color: #FA9C1E;
    height: 100%;
    margin-left: 6px;
}

.galleryContainer {
    cursor: pointer;
    position: relative;
    overflow: hidden;
    margin: 12px 6px 12px 6px;
    border: solid 8px #80807E;
    background-color: #80807E;
}

.galleryContainer:hover {
    box-shadow: 3px 1px 2px #fff152;
}

.galleryContainer:hover > .galleryImg {
    transform: scale(0.625) translateY(-12.5%);
}

.galleryContainer:after {
    content: "";
    display: block;
    padding-bottom: 100%;
}

.galleryImg {
    position: absolute;
    top: -25%;
    width: 100%;
    filter: grayscale(0.75);
    transition: transform 0.4s ease-in-out;
}

@media (max-width: 580px) {
    .articleImg, .empty, .equipImg, .galleryContainer:nth-child(5)  {
        display: none;
    }
    .articleTitle, .articleContent, .equipTitle, .equipContent {
        grid-column: 1/7;
    }
    .mainGallery {
        grid-template-columns: 5% repeat(3, 1fr) 5%;
    }  
}
</style>