<template>
    <div class="layout">
        <h1>{{ this.report.name }}</h1>
        <p v-for="item in this.report.text" :key="item"> {{ item }} </p>
        <carousel class="carousel__viewport" :wrap-around="true">
            <slide v-for="slide in this.report.num_of_slides" :key="slide">
                <img class="carousel__item" :src="require(`@/assets/slides/${this.report.folder}/${slide}.png`)" alt="">
            </slide>
            <template #addons>
                <navigation class="addon"/>
            </template>
        </carousel>
    </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

export default {
    props: ['report'],
    components: {
        Carousel,
        Slide,
        Navigation
    }
}
</script>

<style scoped>
.layout {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    min-height: 90vh;
    max-width: 90vw;
    margin: auto;
}

h1 {
    color: #ff8b00;
    font-size: 3vh;
    font-weight: 700;
    text-align: center;
}

p {
    color: white;
    font-size: 2vh;
    font-weight: 400;
    width: 90%;
    text-align: justify;
    text-indent: 5vh;
}

.carousel__viewport{
    width: 100%;
    z-index: 1;
}
.carousel__item {
    height: auto;
    width: 80%;
    max-width: 720px;
    border-radius: 8px;
    border: 2px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
}

.carousel__slide {
    padding: 2vh;
}
.addon{
    margin:0px;
}
</style>
