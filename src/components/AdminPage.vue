<template>
  <div>
    <form action="http://localhost:2235/api/v1/product" method="post">
      <label for="title">Title:</label>
      <input type="text" id="title" v-model="title" />

      <label for="description">Description:</label>
      <input type="text" id="description" v-model="description" />
      <label for="file">Description:</label>
      <input type="file" @change="onFileChange" />
      <label for="price">Price:</label>
      <input type="number" id="price" v-model="price" />

      <button type="submit" @click="addProduct">Add Product</button>
    </form>
  </div>
  <div v-for="(user, index) in users" v-bind:key="index">
    <div>
      <p>
        {{ user.name }} {{ user.phoneNumber }} {{ user.email }}
        {{ user.describeService }} {{ user.productTitle }}
        <button @click="deleteUser(user.id)">Удалить</button>
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { getUsers } from "../api/userList";
export default {
  name: "AdminPage",
  data() {
    return {
      title: "",
      description: "",
      price: 123,
      users: [],
      products: [],
    };
  },
  methods: {
    addProduct(event) {
      event.preventDefault();
      axios
        .post("http://localhost:2235/api/v1/product", {
          title: this.price,
          description: this.description,
          price: this.price,
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    fetchUsers() {
      axios
        .get("http://localhost:2235/api/v1/product/user")
        .then((response) => {
          this.users = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteUser(userId) {
      axios
        .delete(`http://localhost:2235/api/v1/product/user/${userId}`)
        .then(() => {
          console.log("Пользователь успешно удален");
          this.fetchUsers(); // Обновить список пользователей после удаления
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    getUsers()
      .then((products) => {
        this.users = products;
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>

<style>
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
