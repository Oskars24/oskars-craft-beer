<template>
    <div class="all">
        <router-link to="/" tag="div" class="headerLogo" exact>
            <span>Oskar's</span><br><span>Craft Beer</span>
        </router-link>
        <input class="burgerFalseButton" type="checkbox" :checked="checked" v-model="checked"/>
        <div class="burgerButton">
            <div></div>
        </div>
        <nav class="beerNav">
            <router-link to="/" tag="div" class="lewarek" @click.native="uncheck" exact>
                <div class="rod"></div>
                <div class="wheel"></div>
                <div class="tap"></div>
                <div class="textMenu">START</div>
            </router-link>
            <router-link to="/warki" tag="div" class="lewarek" @click.native="uncheck">
                <div class="rod"></div>
                <div class="wheel"></div>
                <div class="tap" id="pat"></div>
                <div class="textMenu">WARKI</div>
            </router-link>
            <router-link to="/receptury" tag="div" class="lewarek" @click.native="uncheck">
                <div class="rod"></div>
                <div class="wheel"></div>
                <div class="tap"></div>
                <div class="textMenu">RECEPTURY</div>
            </router-link>
            <router-link to="/" tag="div" class="headerLogo" exact>
                <span>Oskar's</span><br><span>Craft Beer</span>
            </router-link>
            <router-link to="/galeria" tag="div" class="lewarek" @click.native="uncheck">
                    <div class="rod"></div>
                    <div class="wheel"></div>
                    <div class="tap"></div>
                    <div class="textMenu">GALERIA</div>
            </router-link>
            <router-link to="/browar" tag="div" class="lewarek" @click.native="uncheck">
                    <div class="rod"></div>
                    <div class="wheel"></div>
                    <div class="tap"></div>
                    <div class="textMenu">BROWAR</div>
            </router-link>
            <router-link to="/kontakt" tag="div" class="lewarek" @click.native="uncheck">
                    <div class="rod"></div>
                    <div class="wheel"></div>
                    <div class="tap"></div>
                    <div class="textMenu">KONTAKT</div>
            </router-link>
            <div class="glass">
            </div>
        </nav>

        <transition name="slide" mode="out-in" >
            <router-view :key="$route.fullPath"></router-view>
        </transition>

        <footer class="footer">
            <div class="footerSection">
                <router-link to="/kontakt" tag="img" :src="require('./assets/avatar.jpg')" class="myAvatar"></router-link>
                <div class="omnie">O MNIE</div>
                <a href="mailto:oskarsycz@gmail.com">oskarsycz@gmail.com</a>
            </div>
            <div class="footerSection">
                <router-link to="/" tag="span" exact>START</router-link>
                <router-link to="/warki" tag="span">WARKI</router-link>
                <router-link to="/receptury" tag="span">RECEPTURY</router-link>
                <router-link to="/galeria" tag="span">GALERIA</router-link>
                <router-link to="/browar" tag="span">BROWAR</router-link>
                <router-link to="/kontakt" tag="span">KONTAKT</router-link>
            </div>
            <div class="footerSection">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82436.12163873018!2d22.714016624592986!3d49.783642734213075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473b7edf1fb668d1%3A0x1efc1701bb993ff0!2zUHJ6ZW15xZts!5e0!3m2!1spl!2spl!4v1569339802826!5m2!1spl!2spl" frameborder="0" allowfullscreen=""></iframe>
            </div>
            <div class="footerLine">Designed by Oskar's 2019</div>
        </footer>
    </div>
</template>

<script>
// Vanilla JS END ANIMATION MENU CLICK
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.tap').forEach(item => {
        item.addEventListener('animationend', event => {
            item.click()
        })
    })
})


export default {
  name: 'App',
  data () {
        return {
            checked: false,
        }
    },
    methods: {
        uncheck: function() {
                this.checked=false;
            },
        },
    watch: {
        
    }
}
</script>

<style>
/* #################################HEADER AND FOOTER CSS################################# */
@font-face {font-family: "SteakSmoked"; src: url("//db.onlinewebfonts.com/t/147ed118f1ab8fd89c5252b82998baff.eot"); src: url("//db.onlinewebfonts.com/t/147ed118f1ab8fd89c5252b82998baff.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/147ed118f1ab8fd89c5252b82998baff.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/147ed118f1ab8fd89c5252b82998baff.woff") format("woff"), url("//db.onlinewebfonts.com/t/147ed118f1ab8fd89c5252b82998baff.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/147ed118f1ab8fd89c5252b82998baff.svg#SteakSmoked") format("svg"); }
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

:root {
    --globalWidth: 70vw;
}

body {
  margin: 0;
  -webkit-tap-highlight-color: transparent; 
}

.all {
    display: grid;
    justify-content: center;
    align-content: start;
    grid-template-columns: var(--globalWidth);
    grid-template-rows: auto;
    overflow: hidden;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    color: #1D1D1B;
    position: relative;
}

a {
    color: white;
    position:relative;
    text-decoration: none;
    text-transform: none;
}

a:hover {
    font-weight: bold;
}

a:active {
    color: #fff152;
}


.footer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr auto;
    grid-gap: 2px;
    margin: 20px 0 20px 0;
    justify-items: center;
    border-bottom: solid #FA9C1E 2px;
}

.footerSection  {
    box-sizing: border-box;
    background-color: #474745;
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    color: white;

}

.footerLine {
    grid-column: 1 / 4;
    display: flex;
    font-size: 10px;
    padding: 3px;
}

.footerSection > span:hover {
    cursor: pointer;
    font-weight: bold;
    line-height: 1.5;
}

.footerSection > span:active{
    color: #fff152;
}

.myAvatar {
    cursor: pointer;
    position: relative;
    width: 90%;
    max-width: 116px;
    margin: 10px;
    border-radius: 50%;
    transition: transform 0.25s ease-in-out, box-shadow 0.25s ease-in-out;
}

.myAvatar:hover {
    box-shadow: 2px 2px 0px #ffffff, -2px -2px 0px #ffffff, -2px 2px 0px #ffffff, 2px -2px 0px #ffffff;
    transform: scale(0.9);
    
}

.myAvatar:active {
    box-shadow: 2px 2px 0px #fff152, -2px -2px 0px #fff152, -2px 2px 0px #fff152, 2px -2px 0px #fff152;
}

.myAvatar:hover + .omnie {
    opacity: 1;
}

.omnie {
    pointer-events: none;
    position: absolute;
    font-weight: bold;
    margin-top: -7px;
    opacity: 0;
    text-shadow: 1px 1px 2px black;
    transition: opacity 0.25s ease-in-out;
}

.footerSection > iframe {
    width: 90%;
    max-width: 200px;
}

.beerNav {
    width: var(--globalWidth);
    margin: 20px 0 20px 0;
    display: grid;
    grid-template-columns: repeat(3, minmax(50px, 1fr)) 200px repeat(3, minmax(50px, 1fr));
    grid-template-rows: 90px 70px;
    justify-content: center;
    align-content: start;
    border-bottom: solid #FA9C1E 2px;
    justify-items: center;
    align-items: center;
}

.headerLogo {
    display: none;
    text-align: center;
    margin: 50px 0 20px 25px;
    cursor: pointer;
    font-family: "SteakSmoked";
    transform: rotate(-15deg);
}

.beerNav > .headerLogo {
    display: block;
    margin: 50px 0 0 25px;
}

.headerLogo span:nth-child(1) {
    font-size: 85px;
    line-height: 0px;
}
.headerLogo span:nth-child(3) {
    font-size: 30px;
    line-height: 50px;
}

.lewarek {
    position: relative;
    cursor: pointer;
}

.rod {
    width: 10px;
    height: 24px;
    margin: auto;
    border-bottom: solid #1D1D1B 2px; 
    position: relative;
    transition: transform 0.2s linear, background 0.2s linear;
}

.rod:before {
    box-sizing: border-box;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background:  linear-gradient(90deg, #FA9C1C 0%, #FA9C1C 50%, #FBB049 50%, #FBB049 100%);
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    border: solid #1D1D1B 3px;
    border-bottom: transparent;
    transform: scaleX(0.9);
}

.rod:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #1D1D1B;
    transform: scaleX(0.9);
    top: calc(100% + 1px + 2px);
}

.wheel {
    box-sizing: border-box;
    position: relative;
    width: 16px;
    height: 16px;
    margin: auto;
    margin-top: 4px;
    background: radial-gradient(ellipse at center, #ffffff 0%,#ededed 50%,#1d1d1b 52%,#1d1d1b 64%,#7b7b53 66%,#7b7b53 100%);
    border-radius: 37.5px;
    border: solid #1D1D1B 2px;
}

.wheel:before {
    content: '';
    position: absolute;
    width: 100%;
	height: 100%;
    background-color: #1D1D1B;
    border-radius: 50px;
    transform: rotate(45deg) scale(0.1,0.45);
}

.wheel:after {
    content: '';
    position: absolute;
    width: 100%;
	height: 100%;
    background-color: #1D1D1B;
    border-radius: 50px;
    transform: rotate(-45deg) scale(0.1,0.45);
}

.tap {
    width: 4px;
    height: 10px;
    margin: auto;
    position: relative;
}

.tap:before {
    content: '';
    position: absolute;
    width: 100%;
	height: 100%;
    background-color: #1D1D1B;
    transform: perspective(9px) rotatex(-45deg);
}

.tap:after {
    content: '';
    position: absolute;
    width: calc(50% - 1px);
	height: 104px;
    transform: scaleY(0);
    transform-origin: top;
    border-right: solid #FBB049 2px;
    z-index: -1;
}

.textMenu {
    font-weight: bold;
    font-size: 15px;
    transform: rotate(-15deg);
    transition: transform 0.15s linear;
}

.glass {
    box-sizing: border-box;
    width: 36px;
    height: 70px;
    border: solid #1D1D1B 6px; 
    position: relative;
    transform: translateY(7px) translateX(calc((var(--globalWidth) - 200px) / 12*-5 - 100px)) perspective(60px) rotatex(-15deg);
    overflow: hidden;
    z-index: -1;
    grid-column: 1 / 8;
    transition: transform 0.25s linear;
}

@supports (-ms-ime-align: auto) { /*Tylko dla MS Edge, bo nie obsługuje kombinacji calc(var()) od 5 lat*/
   .glass {
       transition: none;
    }
}

.glass:before {
    box-sizing: border-box;
    content: '';
    position: absolute;
	width: 100%;
	height: 100%;
    background:  linear-gradient(90deg, #FA9C1C 0%, #FA9C1C 50%, #FBB049 50%, #FBB049 100%);
    transform: translateY(59px);
}

.lewarek:hover > .rod, .lewarek:hover > .tap, .lewarek:hover > .wheel {
    box-shadow: 3px 1px 2px #fff152;
}

.lewarek:hover > .textMenu {
    transform: rotate(0deg);
    text-shadow: 3px 1px 1px #fff152;
}

.lewarek:active > .textMenu {
    transform: rotate(0deg);
    text-shadow: 0px 0px 3px #1D1D1B;
    color: #fff152;
}

.lewarek:hover > .rod {
    transform: translateY(8px) perspective(15px) rotateX(-15deg);
}

.lewarek:hover > .rod:before {
    background:  linear-gradient(80deg, #FA9C1C 0%, #FA9C1C 50%, #FBB049 50%, #FFD59C 100%);
}

.lewarek:hover > .wheel:before{
    animation: wheelRotation 0.5s linear 0.125s 6; 
}
.lewarek:hover > .wheel:after{
    animation: wheelRotation 0.5s linear 6;
}

.lewarek:hover > .tap:after {
    animation: tapLiquid 3.25s linear forwards;
}

.beerNav > .lewarek:hover ~ .glass:before {
    animation: glassLiquid 3s linear forwards 0.25s;
}

.beerNav > .lewarek:first-child:hover ~ .glass {
    transform: translateY(7px) translateX(calc((var(--globalWidth) - 200px) / 12*-5 - 100px)) perspective(60px) rotatex(-15deg);
}

.beerNav > .lewarek:nth-child(2):hover ~ .glass {
    transform: translateY(7px) translateX(calc((var(--globalWidth) - 200px) / 12*-3 - 100px)) perspective(60px) rotatex(-15deg);
}

.beerNav > .lewarek:nth-child(3):hover ~ .glass {
    transform: translateY(7px) translateX(calc((var(--globalWidth) - 200px) / 12*-1 - 100px)) perspective(60px) rotatex(-15deg);
}

.beerNav > .lewarek:nth-child(5):hover ~ .glass {
    transform: translateY(7px) translateX(calc((var(--globalWidth) - 200px) / 12*1 + 100px)) perspective(60px) rotatex(-15deg);
}

.beerNav > .lewarek:nth-child(6):hover ~ .glass {
    transform: translateY(7px) translateX(calc((var(--globalWidth) - 200px) / 12*3 + 100px)) perspective(60px) rotatex(-15deg);
}

.beerNav > .lewarek:nth-child(7):hover ~ .glass {
    transform: translateY(7px) translateX(calc((var(--globalWidth) - 200px) / 12*5 + 100px)) perspective(60px) rotatex(-15deg);
}

.router-link-active:hover > .rod {
    transform: none;
}

.router-link-active:hover > .wheel:after{
    animation: paused; 
}

.router-link-active:hover > .wheel:before{
    animation: paused; 
}

.router-link-active:hover > .tap:after {
    animation: paused;
}

.router-link-active:hover > .textMenu {
    transform: rotate(-15deg);
    text-shadow: 3px 1px 1px #fff152;
}

.beerNav > .router-link-active ~ .glass:before {
    transform: translateY(5px);
}

.beerNav > .router-link-active:hover ~ .glass:before {
    transform: translateY(5px);
    animation: paused;
}

.slide-enter-active, .slide-leave-active {
    transform-origin: top;
    transition: transform 0.5s ease-in-out;
}

.slide-enter {
    transform: translateX(-100vw);
}

.slide-leave-to {
    transform: translateX(100vw);
}

.burgerFalseButton {
    opacity: 0;
}

.burgerFalseButton, .burgerButton {
    display: none;
    position: fixed;
    width: 40px;
    height: 40px;
    margin: 10px;
    z-index: 2;
}

.burgerFalseButton:checked ~ .beerNav {
    transform: none;
}

.burgerButton {
    pointer-events: none;
}

.burgerButton:after, 
.burgerButton:before, 
.burgerButton div {
    background-color: #474745;
    box-shadow: 0 0 8px white;
    border-radius: 3px;
    content: '';
    display: block;
    height: 5px;
    margin: 7px 0;
    transition: transform .2s ease-in-out;
}

.burgerFalseButton:checked ~ .burgerButton:before {
    box-shadow: none;
    transform: translateY(12px) rotate(135deg);
}

.burgerFalseButton:checked ~ .burgerButton:after {
    box-shadow: none;
    transform: translateY(-12px) rotate(-135deg);
}

.burgerFalseButton:checked ~ .burgerButton div {
    transform: scale(0);
}

@keyframes wheelRotation {
	from {transform: rotate(0deg) scale(0.1,0.45);}
	to {transform: rotate(359deg) scale(0.1,0.45);}
}

@keyframes glassLiquid {
	from {transform: translateY(59px);}
	to {transform: translateY(5px);}
}

@keyframes tapLiquid {
	0% {transform: scaleY(0);}
    7.7% {transform: scaleY(1);}
    92.3% {transform: scaleY(1);}
	100% {transform: scaleY(0); transform-origin: bottom;}
}

@media (max-width: 830px) {
    :root {
        --globalWidth: 96vw;
    }
}

@media (max-width: 510px) { /*Zmiana menu*/
    .headerLogo {
        display: block;
    }

    .glass, .footerSection:nth-child(3), .beerNav > .headerLogo {
        display: none;
    }
    .beerNav {
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        grid-template-rows: auto;
        width: fit-content;
        position: fixed;
        width: 100%;
        height: 50vh;
        overflow-y: scroll;
        background-color: #ffffff;
        opacity: 0.9;
        transform: translateX(-100%);
        margin: 0;
        padding: 60px 10px 60px 10px;
        transition: transform 0.25s linear;
        z-index: 1;
    }

    .lewarek {
        margin: 10px;
    }

    .lewarek:hover > .tap:after {
        animation: none;
    }

    .footer {
        grid-template-columns: repeat(2, 1fr);
    }

    .burgerFalseButton, .burgerButton {
        display: block;
    }

}

/* #################################TYPICAL GLOBAL CSS################################# */

.articleButton {
    cursor: pointer;
    margin: auto 0 0 auto;
    border: solid 2px white;
    padding: 2px 20px 2px 20px;
    font-weight: bold;
    width: fit-content;
}

.articleButton:hover {
    background-color:  #ffffff80;
    text-shadow: 1px 1px 2px #00000080;
}

.articleButton:active {
    color: #fff152;
    border: solid 2px #fff152
}

select {
    border: solid 2px #FA9C1E;
    overflow: auto;
    width: 100%;
}

select:focus {
    outline: none;
    border-color: #FA9C1E;
}

option {
    padding: 5px;
    border: solid transparent 2px
}

option:hover {
    background-color: #fff152;
}

option:checked {
    background: linear-gradient(#FA9C1E 0%, #FA9C1E 100%);
    border: solid white 2px
}

.prev, .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
    box-shadow: -7px 7px 0 0 #898988;
    border-radius: 4px;
    padding: 20px;
    margin: 0 30px 0 30px;
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
    box-shadow:  -7px 7px 0 0 #fff152 , -8px 10px 2px #fff152;
}

.next{
    right: 0;
    transform: translateY(-50%) rotate(-135deg);
}

*::-webkit-scrollbar-thumb {
    border-radius: 4px;
	box-shadow: inset 0 0 6px rgba(0,0,0,.3);
}

*::-webkit-scrollbar-track {
    border-radius: 4px;
	background-color: transparent;
}

*::-webkit-scrollbar {
	width: 4px;
	background-color: transparent;
}

</style>
