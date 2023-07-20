<template>
  <section class="section-main">
    <div class="section-two-main-text">
      <h1>Active events</h1>
      <p>Check out the list of our active services</p>
    </div>
    ruby Copy code
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(i, index) in products" :key="index">
          <router-link :to="{ name: 'Page', params: { id: i.id } }">
            <product-card :title="i.title" :price="i.price"></product-card>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProductCard from "./ProductCard.vue";
export default {
  name: "ListProduct",
  components: { ProductCard },
  data() {
    return {
      products: [
        { id: 1, title: "Info1", description: "vmfdmovm", price: 44 },
        { id: 2, title: "Info2", description: "vmfdmovm", price: 56 },
        { id: 3, title: "Info3", description: "vmfdmovm", price: 123 },
        { id: 4, title: "Info4", description: "vmfdmovm", price: 123 },
      ],
    };
  },
  methods: {
    goToProductDetails(id) {
      this.$router.push({ name: "Page", params: { id: id } });
    },
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
.swiper-wrapper {
  display: flex;
  justify-content: space-around;
  padding-bottom: 50px;
}
.swiper-slide {
  border: 1px solid #b48caa;
  width: 250px;
  height: fit-content;
  background-color: white;
  color: black;
  transition: 200ms all;
  cursor: pointer;
}

.swiper-slide:hover {
  scale: 1.1;
}

.swiper-slide > img {
  width: 100%;
}
</style>
