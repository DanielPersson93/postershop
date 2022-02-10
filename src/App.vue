<template>
  <div id="app">
    <header>
      <div class="header__block">
        <h1 class="header__poster-shop">Poster Shop</h1>
        <img class="header__ninja-img" src="./assets/ninjahead.svg" alt="" />
      </div>
    </header>
      <main>
    <router-view></router-view>
      </main>
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
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap');
@import url("https://fonts.googleapis.com/css2?family=PT+Mono&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Ropa+Sans:ital@0;1&display=swap");
html,
body {
  margin: 0;
  display: flex;
  justify-content: center;
  h1 {
    font-family: "Roboto", sans-serif;
  }
}
#app {
  font-family: 'Fira Sans', sans-serif;
  background-color: black;
  width: 1440px;
}
.footersocialmedia {
  display: flex;
  justify-content: space-around;
  color: white;
  height: 320px;
  background-color: rgba(255, 255, 255, 0.2);
  div {
    margin-top: 40px;
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
}
header {
  height: 608px;
  background: #3de07e;
  div {
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  h1 {
    margin-top: 13rem;
    font-size: 102px;
    align-self: center;
  }
  img {
    width: 20%;
    align-self: center;
  }
}
</style>