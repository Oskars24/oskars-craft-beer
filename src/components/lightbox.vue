<template>
<transition name="fadeBox" mode="out-in">
    <div class="lightbox" v-show="show">
        <div class="close" @click="close"></div>
        <div class="prev" @click="prev"></div>
        <div class="next" @click="next"></div>
            <div class="imgDiv">
                <transition name="fade" mode="out-in">
                    <img :src="fullImage(selected)" :key="fullImage(selected)">
                </transition>
            </div>
        <div class="closeBack" @click="close"></div>
    </div>
</transition>
</template>

<script>
export default {
    name: "lightbox",
    props: {
        pictList: {
            type: Array,
            default: function() {
                return []
            }
        },
        path: {
            type: String,
        },
        extension: {
            type: String,
        },
        selected: {
            type: Number,
            default: 1,
        },
        show: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            listLength: this.pictList.length,
        }
    },
    methods: {
        fullImage(number) {
            return require("@/"+this.path+number+this.extension)
        },
        close: function() {
            this.$emit("close", false)
        },
        prev() {
            this.$emit("prev")
        },
        next() {
            this.$emit("next")
        }
    }
}

</script>

<style scoped>
.lightbox {
    display: flex;
    position: fixed;
    justify-content: center;
    align-items: center;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
}

.closeBack {
    position: absolute;
    right:0;
    top:0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: -1;
}

.close {
    position: absolute;
    right:0;
    top:0;
    width: 50px;
    height: 50px;
    margin: 10px;
    transition: filter 0.2s linear;
}

.close:before, .close:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 20%;
  top: 40%;
  background: #898988;
  border-radius: 20px;
  transform: rotate(-45deg)
}

.close:after {
  transform: rotate(45deg)
}

.close:hover {
    filter: drop-shadow(3px 1px 2px #fff152);
}

.close:hover:before, .close:hover:after {
    background: #474745;
}

.close:active:before, .close:active:after {
    background: #fff152;
}

.imgDiv {
    max-height: 95vh;
}

.imgDiv > img {
    max-width: 100%;
    height: auto;
    max-height: 95vh;
    transition: all 0.2s linear;
}

.prev {
    left: 0;
}

.fadeBox-enter-active, .fadeBox-leave-active {
    transition: opacity .5s ease-in-out;
}

.fadeBox-enter, .fadeBox-leave-to {
    opacity: 0;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 1s ease-in-out;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>