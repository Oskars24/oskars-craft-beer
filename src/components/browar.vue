<template>
    <div class="browarPage">
        <div class="articleTitle">BROWAR DOMOWY</div>
        <div class="empty"></div>
        <div class="articleImg"><img src="../assets/tank.png"></div>
        <div class="articleDesc">Zapraszam do browaru! Czyli zobacz, na czym można uwarzyć piwo! Choć „browar” to może zbyt duże słowo, to z przymiotnikiem „domowy” nabiera całkiem innego znaczenia.<br><br>W tym dziale opisane zostały wszystkie najważniejsze „sprzęty piwowarskie” jakich używam. Niektóre z nich są absolutnie niezbędne, a niektóre przydają się tylko w określonych warunkach. Opis przydatny zwłaszcza dla początkujących piwowarów!</div>
        <template class="equipContent" v-for="equi in equiList">
            <div class="equipDesc" :key="equi.id + 'B'">
                <strong>{{ equi.title + ":" }}</strong><br>
                {{ equi.description }}
            </div>
            <div class="equipImg" :key="equi.id" @click="pictSelect(equi.id)">
                <img :src="equiSrc(equi.id)">
            </div>
        </template>
        <lightbox :pictList="equiList" :path="path" :extension="extension" :selected="selected" :show="show" @close="close" @prev="prev" @next="next"/>
    </div>
</template>

<script>
import lightbox from "./lightbox.vue";

export default {
    name: 'browar',
    data () {
        return {
            equiList: require("@/content/equipment/equipment.json"),
            path: "content/equipment/equi_",
            extension: ".png",
            selected: 1,
            show: false
        }
    },
    methods: {
        equiSrc: function(number) {
            return require("@/content/equipment/thumbs/equi_"+number+".jpg")
        },
        pictSelect(id) {
            this.selected=id,
            this.show=true
        },
        close(value) {
            this.show=value
        },
        prev() {
            this.selected--
            if(this.selected < 1) {
                this.selected=this.equiList.length
            }
        },
        next() {
            this.selected++
            if(this.selected > this.equiList.length) {
                this.selected=1
            }
        }
    },
    components: {
        lightbox
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
    box-sizing: border-box;
    border: solid 2px white;
}

.equipImg:nth-of-type(4n-2) {
    grid-column: 1/2;
    background-color: #FA9C1C;
    padding: 10px;
    margin: 8px 5px 8px 0;
    position: relative;
}

.equipDesc:nth-of-type(4n-3) {
    grid-column: 2/-1;
    background-color: #80807E;
    color: white;
    padding: 10px;
    margin: 8px 0 8px 5px;
}

.equipImg:nth-of-type(4n-4) {
    grid-column: 3/-1;
    background-color: #FA9C1C;
    padding: 10px;
    margin: 8px 0 8px 5px;
    position: relative;
}

.equipDesc:nth-of-type(4n-1) {
    grid-column: 1/3;
    background-color: #80807E;
    color: white;
    padding: 10px;
    margin: 8px 5px 8px 0;
}

@media (max-width: 580px) {
    .browarPage {
        grid-template-columns: repeat(2, minmax(140px, 1fr));
        grid-template-rows: max-content;
    }

    .equipImg:nth-of-type(4n-2) {
        grid-column: 1/2;
        position: relative;
    }
    .equipImg:nth-of-type(4n-2):before {
        content: "";
        position: absolute;
        width: 50%;
        height: 50%;
        margin: -20% 25% 0 25%;
        background-color: #fa9c1c;
        transform: translate(-10px, -10px) scaleY(0.3) rotate(45deg);
        z-index: -1;
    }

    .equipDesc:nth-of-type(4n-3) {
        grid-column: 1/-1;
    }

    .equipImg:nth-of-type(4n-4) {
        grid-column: 2/-1;
    }

    .equipImg:nth-of-type(4n-4):before {
        content: "";
        position: absolute;
        width: 50%;
        height: 50%;
        margin: 70% 25% 0 25%;
        background-color: #fa9c1c;
        transform: translate(-10px, -10px) scaleY(0.3) rotate(45deg);
        z-index: -1;
    }

    .equipDesc:nth-of-type(4n-1) {
        grid-column: 1/-1;
    }
}

@media (max-width: 450px) {
    .empty {
        display: none
    }
    .articleDesc {
        grid-column: 1/-1;
    }
    .articleImg {
        grid-row: 1/2;
    }
}
</style>

    
