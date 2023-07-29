<template>
  <section id="Events" class="section-main">
    <div class="section-two-main-text">
      <h1>Active events</h1>
      <p>Check out the list of our active services</p>
    </div>
    <swiper style="width: 100vw; padding: 2rem;"
            :slides-per-view="4"
            :space-between="40"
            :scrollbar="{ draggable: true }"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
    >
      <swiper-slide class="swiper-slide" v-for="(i, index) in products" :key="index">
        <router-link
            :to="{
              name: 'Page',
              params: { id: i.id },
            }"
        >
          <product-card :title="i.title" :price="i.price"></product-card>
        </router-link>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script>
import {getProducts} from "@/api/instance";
import ProductCard from "./ProductCard.vue";
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Navigation, Scrollbar, A11y} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

export default {
  name: "ListProduct",
  components: {
    ProductCard,
    Swiper,
    SwiperSlide,
  },
  data() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      products: [],
      onSwiper,
      onSlideChange,
      modules: [Navigation, Scrollbar, A11y],
    };
  },
  methods: {
    goToProductDetails(id) {
      this.$router.push({name: "Page", params: {id: id}});
    },
  },
  mounted() {
    getProducts()
        .then((products) => {
          this.products = products;
        })
        .catch((error) => {
          console.error(error);
        });
  },
};
</script>

<style>
.section-main {
  background-color: white;
  padding-top: 50px;
}

.section-two-main-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
}

.section-two-main-text h1 {
  font-size: 56px;
  color: #b48caa;
  padding-bottom: 20px;
}

.section-two-main-text p {
  font-size: 18px;
  color: #b48caa;
  padding-bottom: 40px;
}

.swiper-slide {
  border: 1px solid #b48caa;
  width: 100vw;
  height: fit-content;
  background-color: white;
  color: black;
  transition: 200ms all;
  cursor: pointer;
}

.swiper-slide:hover {
  scale: 1.1;
}

.swiper-slide > a > div > img {
  width: 100%;
}
</style>
