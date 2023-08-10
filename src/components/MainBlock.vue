<template>
  <main id="About" class="main">
    <div class="main-block">
      <div class="main-text">
        <h1>About me</h1>
        <h3>My name is Arianna</h3>
        <p>My mission is to help people:</p>
        <ul>
          <li>realize your spiritual nature,</li>
          <li>find harmony with yourself and with the world around you,</li>
          <li>realize your creative potential,</li>
          <li>find your purpose</li>
          <li>find solutions to your problems and problems</li>
          <li>
            Together with me you will be able to direct your life in the
            direction of development and harmony!
          </li>
        </ul>
      </div>
      <img src="../assets/image.jpg" alt="" />
    </div>
  </main>
</template>

<script>
export default {
  name: "MainBlock",
  data() {
    return {};
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Helvetica, sans-serif;
}

body {
  display: flex;
  justify-content: center;
}

.main {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  opacity: 0;
  animation: fadeIn 1s ease-in-out forwards;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.main-block {
  background: #fff;
  width: 90vw;
  padding-left: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.main-text {
  color: #b48caa;
  width: 50vw;
}

.main-text > ul {
  list-style: " - ";
  line-height: 30px;
  padding: 0;
  margin: 0;
}

.main-text p {
  padding-top: 20px;
}

.main-text h1 {
  padding-bottom: 10px;
}

.main-text h3 {
  padding-bottom: 20px;
}

.contacts > a > img {
  width: 40px;
  padding: 10px 10px 0 0;
  transition: 200ms all;
}

.contacts > a > img:hover {
  opacity: 0.6;
}

img {
  width: 40%;
}

h1 {
  font-size: 56px;
}

h3 {
  font-size: 26px;
}

p {
  font-size: 18px;
}

@media screen and (max-width: 768px) {
  .main-text h1 {
    font-size: 30px;
    padding-top: 5px;
  }
  .main-text h3 {
    font-size: 24px;
    padding-top: 5px;
  }
  .main-text p {
    font-size: 16px;
    padding-top: 5px;
  }
}

@media screen and (max-width: 426px) {
  .main-block {
    padding: 0;
    width: 100vw;
    flex-direction: column;
    align-items: flex-start;
  }
  .main-text {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 20px;
  }
  .main-block img {
    width: 100vw;
  }
}
</style>
