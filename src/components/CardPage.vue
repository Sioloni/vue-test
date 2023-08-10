<template>
  <div>
    <HeaderBlock/>
    <div class="card-page-main">
      <div class="product-wrapper">
        <h2 class="text-product">{{ product?.title }}</h2>
        <div class="card-page-main-photo">
          <div v-if="this.product != null && this.product.photo != null">
            <img :src="photoURL()" alt=""/>
          </div>
        </div>
        <span class="text-product">Price: {{ product?.price }}$</span>
        <div class="description-block">
          <p class="text-product">{{ product?.description }}</p>
        </div>
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
  name: "CardPage",
  components: {FooterBlock, HeaderBlock},
  data() {
    return {
      product: null,
      name: "",
      phoneNumber: "",
      email: "",
      serviceDescription: "",
      q:" "
    };
  },
  created() {
    console.log("1")
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
      this.name = " "
      this.phoneNumber = " "
      this.email = " "
    },
    photoURL() {
      console.log("2")
      const byteCharacters = atob(this.product.photo);
      const byteArrays = [];
      for (let i = 0; i < byteCharacters.length; i++) {
        byteArrays.push(byteCharacters.charCodeAt(i));
      }
      const byteArray = new Uint8Array(byteArrays);
      return URL.createObjectURL(new Blob([byteArray]));
    },

    base64ToBlob(base64) {
      console.log("3")
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
@media (max-width: 768px) {
  .card-page-main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .product-wrapper {
    text-align: center;
    margin-bottom: 20px;
  }

  .card-page-main-photo {
    margin-bottom: 20px;
  }

  input[type="text"],
  input[type="tel"],
  input[type="email"],
  input[type="submit"] {
    width: 100%;
    margin-bottom: 10px;
  }
}

.card-page-main {
  width: 100vw;
  display: flex;
  justify-content: center;
}

.card-page-main-photo {
  flex: 1;
  margin-left: 100px;
}

form {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 10px;
}


.text-product{
  color: #b48caa;
}


.description-block{
  width: 100vw;
  height: 70px;
  margin-top: 30px;
}

.product-wrapper h2{
  font-size: 35px;
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
