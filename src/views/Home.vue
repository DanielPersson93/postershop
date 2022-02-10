<template>
  <div class="home">
    <div class="grid">
      <article class="card" v-for="poster in this.$store.state.posters" :key="poster.id">
        <router-link :to="'/poster/' + poster.id">
        <img :src="require(`../assets/${poster.picture}`)" alt="">
        <h1>{{poster.title}}</h1>
       </router-link>
       <p>{{poster.description}}</p>
       <button>Oh, take my money!</button>
      </article>
      
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
  .home{
    background: black;
    padding: 0 221px 126px
  }
  img{
    width: 310px;
  }

  .grid{
    display: grid;
    grid-template-columns: repeat(3,1fr);
  }

  article{
    display: flex;
    flex-direction: column;
    width: 310px;
    margin-top: 96px;
  }

  a, p{
    text-decoration: none;
    color: white;
  }

  button{
    all: unset;
    background: #E83F57;
    padding: .8rem;
    width: 50%;
    color: white;
    border-radius: 2px;
    font-weight: bold;
    cursor: pointer;
  }


</style>
