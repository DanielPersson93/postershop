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

  h1{
    margin: 16px 0 16px
  }

  p{
    margin: 0 0 40px;
  }

  .home{
    background: black;
    padding: 0 200px 126px
  }
  img{
    width: 310px;
  }

  .grid{
    display: flex;
    flex-flow: wrap;
    justify-content: center;
    // grid-template-columns: repeat(3,1fr);
  }

  article{
    display: flex;
    flex-direction: column;
    width: 310px;
    margin: 96px 16px 0 16px;
  }
  article:nth-of-type(11), article:nth-of-type(10){
    background: white;
    width: 483px;
    height: 770px;
    
      img{
        width: 483px;
      }
      h1{
        color: black;
        font-size: 34px;
        font-weight: bold;
        margin: 32px 0 16px 16px;
      }
      p{
        font-size: 16px;
        color: black;
        margin: 0 0 68px 16px;
      }
      button{
        width: 173px;
        margin-left: 16px;
        padding:1.5rem;
      }
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
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;
    text-align: center;
  }


</style>
