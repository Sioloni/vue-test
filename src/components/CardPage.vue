<template>
  <div>
    <HeaderBlock />
    <div class="card-page-main">
      <div class="card-page-main-photo"><img :src="image" alt="" /></div>
      <p id="q">{{ title }}</p>
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
import HeaderBlock from "./HeaderBlock.vue";
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: "Hello",
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
    return {};
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
  /* WebKit, Blink, Edge */
  color: #b48caa;
}
:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #b48caa;
  opacity: 1;
}
::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #b48caa;
  opacity: 1;
}
:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #b48caa;
}
::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #b48caa;
}

::placeholder {
  /* Most modern browsers support this now. */
  color: #b48caa;
}
</style>
