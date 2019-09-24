<template>
    <div class="all">
        <nav class="beerNav">
            <router-link to="/" tag="div" class="lewarek" exact>
                <div class="rod"></div>
                <div class="wheel"></div>
                <div class="tap"></div>
                <div class="textMenu">START</div>
            </router-link>
            <router-link to="/warki" tag="div" class="lewarek">
                <div class="rod"></div>
                <div class="wheel"></div>
                <div class="tap"></div>
                <div class="textMenu">WARKI</div>
            </router-link>
            <router-link to="/receptury" tag="div" class="lewarek">
                <div class="rod"></div>
                <div class="wheel"></div>
                <div class="tap"></div>
                <div class="textMenu">RECEPTURY</div>
            </router-link>
            <router-link to="/" tag="div" class="headerLogo" exact>
                <span>Oskar's</span><br><span>Craft Beer</span>
            </router-link>
            <router-link to="/galeria" tag="div" class="lewarek">
                    <div class="rod"></div>
                    <div class="wheel"></div>
                    <div class="tap"></div>
                    <div class="textMenu">GALERIA</div>
            </router-link>
            <router-link to="/browar" tag="div" class="lewarek">
                    <div class="rod"></div>
                    <div class="wheel"></div>
                    <div class="tap"></div>
                    <div class="textMenu">BROWAR</div>
            </router-link>
            <router-link to="/kontakt" tag="div" class="lewarek">
                    <div class="rod"></div>
                    <div class="wheel"></div>
                    <div class="tap"></div>
                    <div class="textMenu">KONTAKT</div>
            </router-link>
            <div class="glass">
            </div>
        </nav>

        <router-view/>

        <footer class="footer">
            <div class="footerContact">
                <img src="./assets/avatar.jpg" class="myAvatar">
                <span>oskarsycz@gmail.com</span>
            </div>
            <div class="footerMenu">
                <router-link to="/" tag="span" exact>START</router-link>
                <router-link to="/warki" tag="span">WARKI</router-link>
                <router-link to="/receptury" tag="span">RECEPTURY</router-link>
                <router-link to="/galeria" tag="span">GALERIA</router-link>
                <router-link to="/browar" tag="span">BROWAR</router-link>
                <router-link to="/kontakt" tag="span">KONTAKT</router-link>
            </div>
            <div class="footerMap">
                <img src="./assets/map.png">
            </div>
            <div class="footerLine">Designed by Oskar's 2019</div>
        </footer>
    </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@font-face {font-family: "SteakSmoked"; src: url("//db.onlinewebfonts.com/t/147ed118f1ab8fd89c5252b82998baff.eot"); src: url("//db.onlinewebfonts.com/t/147ed118f1ab8fd89c5252b82998baff.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/147ed118f1ab8fd89c5252b82998baff.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/147ed118f1ab8fd89c5252b82998baff.woff") format("woff"), url("//db.onlinewebfonts.com/t/147ed118f1ab8fd89c5252b82998baff.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/147ed118f1ab8fd89c5252b82998baff.svg#SteakSmoked") format("svg"); }
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

:root {
    --globalWidth: 70vw;
}

.all {
    display: grid;
    justify-content: center;
    align-content: start;
    grid-template-columns: var(--globalWidth);
    grid-template-rows: 1fr auto 1fr;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
}

.footer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr auto;
    grid-gap: 2px;
    margin-top: 20px;
    justify-items: center;
    border-bottom: solid #FA9C1E 2px;
}

.footerContact, .footerMenu, .footerMap  {
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

.footerMenu > span:hover {
    cursor: pointer;
    font-weight: bold;
    line-height: 1.5;
}

.footerMenu > span:active {
    color: #fff152;
}

.myAvatar {
    width: 90%;
    max-width: 116px;
    border-radius: 50%;
}

.footerMap > img {
    width: 90%;
    max-width: 200px;
}

.beerNav {
    width: var(--globalWidth);
    margin: auto;
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
    text-align: center;
    margin-top: 100px;
    margin-left: 25px;
    cursor: pointer;
    font-family: "SteakSmoked";
    transform: rotate(-15deg);
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

@media (max-width: 715px) {
    :root {
        --globalWidth: 98vw;
    }
}

@media (max-width: 510px) { /*Zmiana menu*/
    .lewarek, .glass {
        display: none;
    }
    .beerNav {
        grid-template-columns: 1fr;
    }
}
</style>
