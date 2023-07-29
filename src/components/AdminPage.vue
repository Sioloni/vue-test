<template>
  <h1 class="admin-header">Admin page</h1>
  <div class="admin-wrapper">
    <div class="admin-wrapper__form">
      <form action='http://localhost:2235/api/v1/product' method="post">
        <label for="title">Title</label>
        <input required placeholder="enter product title" type="text" id="title" v-model="title"/>

        <label for="description">Description</label>
        <input required placeholder="enter product description" type="text" id="description" v-model="description"/>
        <label for="file">Description</label>
        <input required type="file" @change="onFileChange"/>
        <label for="price">Price</label>
        <input required type="number" id="price" v-model="price"/>

        <button type="submit" @click="addProduct">Add Product</button>
      </form>
    </div>
    <table>
      <thead>
      <tr>
        <td>User name</td>
        <td>Phone number</td>
        <td>Email</td>
        <td>Describe Service</td>
        <td>Product title</td>
        <td>Delete</td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(user, index) in users" v-bind:key="index">
        <td>{{ user.name }}</td>
        <td>{{ user.phoneNumber }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.describeService }}</td>
        <td>{{ user.productTitle }}</td>
        <td @click="deleteUser(user.id)">Удалить</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import {getUsers} from "@/api/userList";
import {Port} from "@/api/port";

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
          .post(`http://localhost:${Port}}/api/v1/product`, {
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
          .get(`http://localhost:${Port}}/api/v1/product/user`)
          .then((response) => {
            this.users = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
    },
    deleteUser(userId) {
      axios
          .delete(`http://localhost:${Port}}/api/v1/product/user/${userId}`)
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
.admin-header {
  text-align: center;
}
.admin-wrapper {
  width: calc(100vw - 1rem);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
}

table tr td {
  border: 1px solid #000;
  text-align: center;
  padding: 1rem;
}

tbody > tr > td:last-child {
  transition: all 0.2s ease;
  cursor: pointer;
}

tbody > tr > td:last-child:hover {
  background: crimson;
}

.admin-wrapper__form{
  border: 1px solid #000;
}
.admin-wrapper__form > form{
  padding: 0;
}
.admin-wrapper__form > form > input {
  padding: 1rem;
  margin: 0 1rem;
  border: 1px solid #000;

}
.admin-wrapper__form > form > label {
  text-align: center;
  font-weight: 700;
}
.admin-wrapper__form > form > label:first-child {
  padding-top: 1rem;
}
.admin-wrapper__form > form > button {
  border: none;
  background: none;
  box-shadow: black 0 0 5px 2px;
  cursor: pointer;
  width: 100%;
  height: 100%;
  padding: 1rem;
  transition: all 0.2s ease;
}
.admin-wrapper__form > form > button:hover {
  background: yellowgreen;
}
</style>
