<template>
    <div class="kontaktPage">
        <div class="myphoto"><img src="../assets/myphoto.jpg"></div>
        <div class="contact"><strong>KONTAKT:</strong><br><a href="mailto:oskarsycz@gmail.com">oskarsycz@gmail.com</a><br><a href="https://github.com/Oskars24" target="_blank" rel="noopener noreferrer">github.com/Oskars24</a><br><a href="https://maps.google.com/maps?ll=49.783553,22.784057&z=10&t=m&hl=pl&gl=PL&mapclient=embed&q=Przemy%C5%9Bl" target="_blank" rel="noopener noreferrer">37-700, Przemyśl</a></div>
        <div class="map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82436.12163873018!2d22.714016624592986!3d49.783642734213075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473b7edf1fb668d1%3A0x1efc1701bb993ff0!2zUHJ6ZW15xZts!5e0!3m2!1spl!2spl!4v1569339802826!5m2!1spl!2spl" frameborder="0" allowfullscreen=""></iframe></div>
        <div class="aboutMe"><strong>O MNIE:</strong><br>Piwowarem domowym zostałem mianowany styczniu 2018 r. kiedy to otrzymałem od mojej dziewczyny prezent w postaci kompletnego zestawu do warzenia z ekstraktów.  Jako, iż od dłuższego czasu interesowałem się Kraftowym piwem szybko złapałem bakcyla i sukcesywnie dokupywałem sprzętu. Już dwa miesiące od pierwszej warki przerzuciłem się na warzenie ze słodów. Pisząc te słowa mam już za sobą 12 warek i nie zamierzam na tym poprzestać! :)<br><br>Na co dzień natomiast zajmuję się tworzeniem stron jako front-end developer. Lubię także chodzenie po lesie i górach, a także taniec towarzyski :)
</div>
    </div>
</template>

<script>
export default {
name: 'kontakt'
}
</script>

<style>
    .beerNav > .router-link-active:nth-child(7) ~ .glass {
    transform: translateY(7px) translateX(calc((var(--globalWidth) - 200px) / 12*5 + 100px)) perspective(60px) rotatex(-15deg);
    }
</style>

<style scoped>
.kontaktPage {
    display: grid;
    grid-template-columns: auto 160px 1fr;
    grid-template-rows: auto 1fr;
    font-size: 15px;
    background-color: #FBB049;
}

.myphoto {
    grid-area: 1/1/3/2;
    background-color: #FA9C1C;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
}

.myphoto > img {
    width: 100%;
    max-width: 250px;
    border: solid 2px white;
}

.contact {
    grid-area: 1/2/1/3;
    padding: 10px;
    color: white;
}

.map {
    grid-area: 1/3/2/-1;
    padding: 10px;
    text-align: right;
}

.map > iframe {
    width: 90%;
}

.aboutMe {
    grid-area: 2/2/3/-1;
    padding: 0 10px 10px 10px;
    color: white;
}

@media (max-width: 580px) {
    .map {
        display:none;
    }
    .myphoto, .contact, .aboutMe {
        grid-column: 1/-1;
        grid-row: auto;
    }
}
</style>
