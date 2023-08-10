<template>
  <section id="OnlineRecord" class="section-three">
    <div class="section-three-text">
      <div class="wrapper">
        <h1>Didn't find your<br/>service?</h1>
        <h1>Then<br/>describe<br/>her!</h1>
        <span class="images">
          <img id="imgOne" src="../assets/image_one.png" alt=""/>
          <img id="imgTwo" src="../assets/image_two.png" alt=""/>
        </span>
      </div>
      <div class="form__wrapper">
        <form @submit.prevent="addUser" action="">
          <input type="text" id="name" v-model="name" placeholder="Name"/>
          <input type="tel" v-model="phoneNumber" placeholder="Phone number"/>
          <input type="email" v-model="email" placeholder="Email*"/>
          <input type="text" v-model="describeService" placeholder="Describe your service"/>
          <input type="submit" value="SUBMIT"/>
        </form>
        <p>
          To book a personal session or join a group<br/>therapy and events,
          please fill out the contact<br/>form. Please note that my sheldue is
          very<br/>packed and waiting list might take up to several<br/>months.
          To book your spot is required a<br/>prepayment.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import {Port} from "@/api/port";

export default {
  name: "OnlineRecordBlock",
  data() {
    return {
      name: " ",
      phoneNumber: " ",
      email: " ",
      describeService: " "
    };
  },
  methods: {
    addUser() {
      axios
          .post(`http://localhost:${Port}/api/v1/product/user`, {
            name: this.name,
            phoneNumber: this.phoneNumber,
            email: this.email,
            describeService: this.describeService,
            productTitle: null
          })
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      this.name = " "
      this.phoneNumber = " "
      this.email = " "
      this.describeService = " "
    }
  }
};
</script>

<style>


.wrapper {
  position: relative;
}

.form__wrapper {
  width: 400px;
}

form {
  display: flex;
  justify-content: space-around;

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

.section-three {
  background-color: white;
  width: 100vw;
}

.wrapper > h1 {
  padding: 60px 60px 20px 60px;
}

.section-three-text {
  position: relative;
  display: flex;
  justify-content: space-between;
  height: fit-content;
  align-items: baseline;
  color: #bc8aac;
  padding: 50px;
}

.images {
  position: absolute;
  top: 500px;
  left: 400px;
}

.images > img {
  width: 200px;
}

#imgOne {
  position: absolute;
  left: -150px;
  bottom: -30px;
  z-index: 1;
}

#imgTwo {
  position: absolute;
  bottom: 30px;
  left: -100px;
}

@media screen and (max-width: 768px) {
  .wrapper > h1 {
    padding: 20px 20px;
    font-size: 36px;
    width: 50%;
  }

  .images > img {
    width: 150px;
  }

  .form__wrapper {
    width: 50%;
  }

  .images {
    position: absolute;
    top: 40vh;
    left: 36vw;
  }

  .form__wrapper form {
    width: 95%;
    gap: 10px;
  }
}

@media screen and (max-width: 426px) {
  .section-three-text {
    padding: 0;
  }

  .section-three-text .wrapper {
    display: none;
  }

  .form__wrapper {
    width: 100%;
    padding: 40px;
  }

  .form__wrapper form {
    width: 100%;
    gap: 10px;
  }
}

</style>
