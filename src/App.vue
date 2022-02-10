<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <footer>
      <nav class="footersocialmedia">
        <img src="./assets/logo-facebook.svg" alt="">
        <img src="./assets/logo-instagram.svg" alt="">
        <img src="./assets/logo-linkedin.svg" alt="">
        <img src="./assets/logo-twitter.svg" alt="">
      </nav>
    </footer>
  </div>
</template>

<style lang="scss">
.footersocialmedia {
  background-color: black
}

@import url('https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap');
#app {
  font-family: 'Fira Sans', sans-serif;
}
</style>