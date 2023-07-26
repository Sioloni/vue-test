<template>
  <div>
    <HeaderBlock />
    <div class="card-page-main">
      <div class="card-page-main-photo"><img :src="image" alt="" /></div>
      <p id="q">{{ product?.title }}</p>
      <p id="q">{{ product?.describe }}</p>
      <div>
        <div class="form__wrapper">
          <form action="">
            <input type="text" placeholder="Name" />
            <input type="tel" placeholder="Phone number" />
            <input type="email" placeholder="Email*" />
            <input type="text" placeholder="Describe your service" />
            <input type="submit" value="SUMBIT" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getProducts } from "../api/instance";
import HeaderBlock from "./HeaderBlock.vue";
export default {
  props: {
    title: {
      type: String,
    },
    price: {
      type: Number,
    },
    image: {
      default: require("../assets/image.jpg"),
    },
  },
  name: "CardPage",
  components: { HeaderBlock },
  data() {
    return {
      product: null,
    };
  },
  created() {
    getProducts()
      .then((products) => {
        this.products = products;
        const product = products.find(
          (product) => product.id == this.$route.params.id
        );
        if (product) {
          this.product = product;
        }
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>

<style>
.card-page-main {
  display: flex;
  justify-content: flex-start;
}
.q {
  color: black;
  font-size: 300px;
  z-index: 1;
}

.card-page-main-photo {
  flex: 1;
}

.form__wrapper {
  flex: 1;
  padding-top: 30px;
  padding-right: 450px;
}

form {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 400px;
  gap: 20px;
  padding-bottom: 10px;
}

input {
  padding: 30px 0 30px 0;
  border: none;
  border-bottom: 2px solid #b48caa;
  color: #b48caa;
}

input[type="submit"] {
  background: mediumpurple;
  border: none;
  color: #fff;
  transition: 200ms all;
  cursor: pointer;
}

input[type="submit"]:hover {
  background: #b48caa;
}
::-webkit-input-placeholder {
  color: #b48caa;
}
:-moz-placeholder {
  color: #b48caa;
  opacity: 1;
}
::-moz-placeholder {
  color: #b48caa;
  opacity: 1;
}
:-ms-input-placeholder {
  color: #b48caa;
}
::-ms-input-placeholder {
  color: #b48caa;
}

::placeholder {
  color: #b48caa;
}
</style>
