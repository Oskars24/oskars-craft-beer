<template>
    <div class="startPage">
        <div class="sliderContainer">
            <transition-group class='slider' tag="div">
                <div class="sliderBottle" v-for="(beer, index) in beerList" :key="beer">
                    <router-link to="/" tag="div" class="oneBeerDiv">
                        <img :src="bottleSrc(index+1)">
                        <span>{{ beer }}</span>
                    </router-link>
                </div>
            </transition-group>
            <div class='prev' @click="previous"></div>
            <div class='next' @click="next"></div>
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
            tablica.reverse().slice(0,11)
            return tablica = [].concat(tablica.slice(6,11),tablica.slice(0,6))
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
    .beerNav > .router-link-exact-active:first-child ~ .glass {
        transform: translateY(7px) translateX(calc((var(--globalWidth) - 200px) / 12*-5 - 100px)) perspective(60px) rotateX(-15deg);
    }
</style>

<style scoped>
    .startPage {
        display: grid;
        justify-content: center;
        align-content: start;
        grid-template-columns: 1fr;
    }

    .sliderContainer {
        display: grid;
        position: relative;
        justify-content: center;
        align-content: start;
        grid-template-columns: 1fr;
    }

    .slider {
        display: flex;
        justify-content: center;
        overflow: hidden;
    }

    .prev, .next {
        cursor: pointer;
        position: absolute;
        top: 50%;
        transform: translateY(-50%) rotate(45deg);
        box-shadow: -7px 7px 0 0 #898988;
        border-radius: 4px;
        padding: 20px;
        margin: 0 20px 0 20px;
        transition: box-shadow 0.2s linear;
    }

    .prev:before, .next:before {
        content: '';
        position: absolute;
        transform: translate(calc(-50% - 7px), calc(-50% + 7px));
        width: 100%;
        height: 100%;
    }

    .prev:hover, .next:hover {
        box-shadow: -7px 7px 0 0 #474745, -8px 10px 2px #fff152;
    }

    .prev:active, .next:active {
        box-shadow:  -7px 7px 0 0 #fff152 , -8px 10px 2px #fff152, -8px 10px 3px;
    }

    .next{
        right: 0;
        transform: translateY(-50%) rotate(-135deg);
    }

    .sliderBottle {
        pointer-events: none;
        cursor: pointer;
        text-align: center;
        margin-left: 4vw;
        margin-right: 4vw;
        transition: transform 1s ease-in-out;
    }

    .oneBeerDiv {
        transform: scale(0.7);
        opacity: 0.25;
        transition: opacity 1s ease-in-out, transform 1s ease-in-out;
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


</style>
