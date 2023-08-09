<template>
  <h1 class="admin-header">Admin page</h1>
  <div class="admin-wrapper">
    <div class="admin-wrapper__form">
      <form @submit.prevent="createProduct" enctype="multipart/form-data">
        <label for="title">Title</label>
        <input required placeholder="enter product title" type="text" v-model="title"/>
        <label for="description">Description</label>
        <input required placeholder="enter product description" type="text" id="description" v-model="description"/>
        <label for="file">Photo</label>
        <input required type="file" @change="handleFileUpload"/>
        <label for="price">Price</label>
        <input required type="number" id="price" v-model="price"/>
        <button type="submit">Add Product</button>
      </form>
    </div>
    <table class="table-users">
      <thead>
      <tr>
        <td>User name</td>
        <td>Phone number</td>
        <td>Email</td>
        <td>Describe Service</td>
        <td>Product title</td>
        <td>Update</td>
        <td>Delete</td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(user, index) in this.users" v-bind:key="index">
        <td>{{ user.name }}</td>
        <td>{{ user.phoneNumber }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.describeService }}</td>
        <td>{{ user.productTitle }}</td>
        <td id="update" @click="getUser(user.id)">Обновить</td>
        <td id="delete" @click="deleteUser(user.id)">Удалить</td>
        <div>
        </div>
      </tr>
      </tbody>
    </table>
    <form v-if="this.reg == true">
      <label>Name</label>
      <input type="text" placeholder="Name" v-model="this.user.name">
      <label>Phone</label>
      <input type="text" placeholder="Phone" v-model="this.user.phoneNumber">
      <label>Email</label>
      <input type="email" placeholder="Email" v-model="this.user.email">
        <label>Title</label>
        <input type="text" placeholder="Title" v-model="this.user.productTitle">
        <label>Service</label>
        <input type="text" placeholder="Service" v-model="this.user.describeService">
      {{console.log(this.user)}}
      <button type="submit" @click="updateUser()">Submit</button>
    </form>

      <table class="table-product">
        <thead>
        <tr>
          <td>Title</td>
          <td>Description</td>
          <td>Price</td>
          <td>Update</td>
          <td>Delete</td>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(product, index) in this.products" v-bind:key="index">
          <td>{{ product.title }}</td>
          <td>{{ product.description }}</td>
          <td>{{ product.price }}</td>
<!--          <td id="update" @click="getUser(user.id)">Обновить</td>-->
          <td id="delete" @click="deleteProduct(product.id)">Удалить</td>
          <div>
          </div>
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
      price: 0,
      users: [],
      products: [],
      photo: '',
      user: null,
      reg: false
    };
  },
  mounted() {
    this.fetchUsers();
    this.getProducts();
  },
  methods: {




    getUser(id) {
      const url = `http://localhost:${Port}/api/v1/product/user/${id}`;

      axios.get(url)
          .then(response => {
            this.valueReg(this.reg)
            this.user = response.data;
            console.log(this.user)
          })
          .catch(error => {
            console.error('Ошибка при создании продукта:', error);
          });
    },
    updateUser(){
      console.log(this.user)
      const url = `http://localhost:${Port}/api/v1/product/user/${this.user.id}`;
      axios.put(url, {
        name: this.user.name,
        email: this.user.email,
        phoneNumber: this.user.phoneNumber,
        describeService: this.user.describeService,
        productTitle: this.user.productTitle
      })
          .then(response => {
            this.valueReg(this.reg)
            console.log('Продукт успешно отредактирован:', response.data);
          })
          .catch(error => {
            console.error('Ошибка при  редактировании пользователя:', error);
          });
    },
    valueReg(reg){
      if(reg == true){
        this.reg = false
      }
      else{
        this.reg = true;
      }
    },
    createProduct() {
      const reader = new FileReader();
      reader.readAsDataURL(this.photo);
      reader.onload = () => {
        const base64Image = reader.result;
        const modifiedBase64Image = base64Image.replace(/^data:image\/(png|jpeg|jpg);base64,/, '');

        const url = `http://localhost:${Port}/api/v1/product`;

        axios.post(url, {
          title: this.title,
          description: this.description,
          price: this.price,
          photo: modifiedBase64Image,
        })
            .then(response => {
              console.log('Продукт успешно создан:', response.data);
              // Очистка формы после успешного создания продукта
              this.title = '';
              this.price = 0;
              this.description = '';
              this.photo = '';
              this.getProducts()
            })
            .catch(error => {
              console.error('Ошибка при создании продукта:', error);
            });
      };
    },
    getProducts(){
      const url = `http://localhost:${Port}/api/v1/product`;

      axios.get(url)
          .then(response => {
            console.log('Продукт успешно получен:', response.data);
            this.products = response.data;
          })
          .catch(error => {
            console.error('Ошибка при создании продукта:', error);
          });
    },
    handleFileUpload(event) {
      this.photo = event.target.files[0];
    },
    fetchUsers() {
      axios
          .get(`http://localhost:${Port}/api/v1/product/user`)
          .then((response) => {
            this.users = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      return this.users
    },
    deleteUser(userId) {
      axios
          .delete(`http://localhost:${Port}/api/v1/product/user/${userId}`)
          .then(() => {
            console.log("Пользователь успешно удален");
            this.fetchUsers();
          })
          .catch((error) => {
            console.log(error);
          });
    },
    deleteProduct(productId){
      axios
          .delete(`http://localhost:${Port}/api/v1/product/${productId}`)
          .then(() => {
            console.log("Товар успешно удален");
            this.getProducts();
          })
          .catch((error) => {
            console.log(error);
          });
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
  }
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

.table-users {
  width: 800px;
  height: 100px;
}

table-product{
  width: 800px;
  height: 100px;
  margin-top: 300px;
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

.admin-wrapper__form {
  border: 1px solid #000;
}

.admin-wrapper__form > form {
  padding: 0;
}

.admin-wrapper__form > form > input {
  padding: 1rem;
  margin: 0 1rem;
  border: 1px solid #000;

}

#update:hover {
  background-color: yellow;
}

#delete:hover {
  background-color: #ec2323;
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
