<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <footer>
      <nav class="footersocialmedia">
        <div>
          <h1>Nav</h1>
          <a href="">Products</a>
          <a href="">About</a>
          <a href="">Contact</a>
        </div>
        <div>
          <h1>Address</h1>
          <p>Plinkeplonkvägen 32</p>
          <p>888 81 Klonkberga</p>
        </div>
        <div>
          <h1>Social media</h1>
          <img src="./assets/logo-facebook.svg" alt="" width="32" height="32">
          <img src="./assets/logo-instagram.svg" alt="" width="32" height="32">
          <img src="./assets/logo-linkedin.svg" alt="" width="32" height="32">
          <img src="./assets/logo-twitter.svg" alt="" width="32" height="32">
        </div>
      </nav>
    </footer>
  </div>
</template>

<style lang="scss">
.footersocialmedia {
  display: flex;
  justify-content: space-around;
  div {
    margin-top: 50px;
  }
  div:first-of-type {
    display: flex;
    flex-direction: column;
  }
  img {
    margin-right: 18px;
  }
  h1 {
    line-height: 48px;
    font-size: 32px;
  }
  a {
    line-height: 150%;
    color: white;
    text-decoration: none;
  }
  color: white;
  height: 320px;
  background-color: rgba(255, 255, 255, 0.2);
}

@import url('https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap');
#app {
  font-family: 'Fira Sans', sans-serif;
  background-color: black;
  width: 1440px;
}
</style>