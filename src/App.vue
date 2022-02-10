<template>
  <div id="app">
    <header>
      <div class="header__block">
        <h1 class="header__poster-shop">Poster Shop</h1>
        <img class="header__ninja-img" src="./assets/ninjahead.svg" alt="" />
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
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
  width: 1440px;

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
}
</style>
