<template>
  <div>
    <HeaderBlock/>
    <div class="card-page-main">
      <div class="product-wrapper">
        <h2>{{ product?.title }}</h2>
        <div class="card-page-main-photo">
          <img :src="image" alt=""/>
        </div>
        <span>Price: {{ product?.price }}$</span>
        <p>{{ product?.describe }}</p>
      </div>


      <div class="form__wrapper">
        <form @submit.prevent="submitForm">
          <input type="text" v-model="name" placeholder="Name"/>
          <input
              type="tel"
              v-model="phoneNumber"
              placeholder="Phone number"
          />
          <input type="email" v-model="email" placeholder="Email*"/>
          <input type="submit" value="SUMBIT"/>
        </form>
      </div>
    </div>
  </div>
  <FooterBlock/>
</template>

<script>
import {getProducts} from "../api/instance";
import HeaderBlock from "./HeaderBlock.vue";
import axios from "axios";
import {Port} from "@/api/port";
import FooterBlock from "@/components/FooterBlock.vue";

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
  components: {FooterBlock, HeaderBlock},
  data() {
    return {
      product: null,
      name: "",
      phoneNumber: "",
      email: "",
      serviceDescription: "",
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
  methods: {
    async submitForm() {
      try {
        const response = await axios.post(
            `http://localhost:${Port}/api/v1/product/user`,
            {
              name: this.name,
              phoneNumber: this.phoneNumber,
              email: this.email,
              describeService: null,
              productTitle: this.product.title,
            }
        );
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style>
.card-page-main {
  display: flex;
  justify-content: center;
  padding: 3rem;
}

.card-page-main-photo {
  flex: 1;
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
