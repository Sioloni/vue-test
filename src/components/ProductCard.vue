<template>
  <div>
    <img :src="image" alt="" />
    <div class="product-details">
      <p class="title">{{ title }}</p>
      <p class="price">{{ price }} $</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: { type: String, required: true },
    price: { type: Number },
    image: { default: require("../assets/image.jpg") },
    id: { type: Number },
  },
  name: "ProductCard",
};
</script>

<style>
.product-details {
  padding: 20px;
}
.title {
  color: #b48caa;
  font-size: 26px;
}
.price {
  color: #b48caa;
}
</style>
