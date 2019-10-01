<template>
    <div class="galleryPage">
        <div class="pictLabel" v-for="pict in pictList" :key="pict.id">
            <div class="pictImg" @click="pictSelect(pict.id)"><img :src="pictSrc(pict.id)"></div>
        </div>
        <lightbox :pictList="pictList" :selected="selected" :show="show" @close="close" @prev="prev" @next="next"/>
    </div>
</template>

<script>
import lightbox from "./lightbox.vue";

export default {
    name: 'galeria',
    data () {
        return {
            pictList: require("@/content/gallery/gallery.json").reverse(),
            selected: 1,
            show: false
        }
    },
    methods: {
        pictSrc: function(number) {
            return require("@/content/gallery/thumbs/photo_"+number+".jpg")
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
                this.selected=this.pictList.length
            }
        },
        next() {
            this.selected++
            if(this.selected > this.pictList.length) {
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
    .beerNav > .router-link-active:nth-child(5) ~ .glass {
    transform: translateY(7px) translateX(calc((var(--globalWidth) - 200px) / 12*1 + 100px)) perspective(60px) rotatex(-15deg);
    }
</style>

<style scoped>
.galleryPage {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(174px, 1fr));
    justify-items: center;
    color: #707070
}

.pictImg {
    margin: 5px 5px 0 5px;
    background-color: white;
    border: solid 2px transparent;
    padding: 20px 10px 10px 10px;
}

.pictImg:hover {
    background-color: #FAA432;
    border: solid 2px #fff152;
}

.pictImg:hover > img {
    transform: scale(1.05);
    filter: grayscale(0);
    transform-origin: bottom;
}

.pictImg > img {
    filter: grayscale(0.75);
    transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out;
}
</style>
