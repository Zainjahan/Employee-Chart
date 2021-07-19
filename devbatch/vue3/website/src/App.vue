<template>
  <div class="app">
    <carousel @next="next" @prev="prev">
      <carousel-slide
        v-for="(slide, index) in slides"
        :key="slide"
        :index="index"
        :visibleSlide="visibleSlide"
      >
        <img :src="slide" />
      </carousel-slide>
    </carousel>
    <Newspaper />
    <Carousel />
    <CarouselSlide />
  </div>
</template>

<script>
import Newspaper from "./components/Newspaper.vue";
import Carousel from "./components/Carousel";
import CarouselSlide from "./components/CarouselSlide";

export default {
  data() {
    return {
      slides: ["/carousel1.jpg", "/carousel2.jpg"],
      visibleSlide: 0,
    };
  },
  computed: {
    slidesLen() {
      return this.slides.length;
    },
  },
  methods: {
    next() {
      if (this.visibleSlide >= this.slidesLen - 1) {
        this.visibleSlide = 0;
      } else {
        this.visibleSlide++;
      }
    },
    prev() {
      if (this.visibleSlide <= 0) {
        this.visibleSlide = this.slidesLen - 1;
      } else {
        this.visibleSlide--;
      }
    },
  },
  components: {
    Newspaper,
    Carousel,
    CarouselSlide,
  },
};
</script>

<style>
.app {
  display: flex;
  justify-content: center;
}
img {
  height: 500px;
  width: 500px;
}
</style>
