<template>
  <div>
    <img :src="photoURL" alt="" />
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
    photo: {type: String},
    id: { type: Number },
  },
  name: "ProductCard",
  computed: {
    photoURL() {
      return URL.createObjectURL(this.base64ToBlob(this.photo));
    },
  },
  methods: {
    base64ToBlob(base64) {
      const byteCharacters = atob(base64);
      const byteArrays = [];
      for (let i = 0; i < byteCharacters.length; i++) {
        byteArrays.push(byteCharacters.charCodeAt(i));
      }
      const byteArray = new Uint8Array(byteArrays);
      return new Blob([byteArray]);
    },
  },
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
