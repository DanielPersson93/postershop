<template>
  <div class="about">
    <img :src="require(`../assets/${poster.picture}`)" alt="" />
    <div>
      <h1>{{ poster.title }}</h1>
      <p>{{ poster.description }}</p>
      <p>Price: ${{ poster.price }}</p>
      <p>Rating: {{ poster.rating }}/5</p>

      <button>Oh, take my money!</button>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    poster(){
      return this.$store.state.posters.find(fis => fis.id == this.$route.params.id)
    }
  }
};
</script>
<style lang="scss" scoped>
.about {
  color: white;
  display: flex;
  margin-top: 2rem;
  img {
    width: 500px;
  }
  div {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-left: 2rem;
    h1 {
      font-size: 3rem;
      font-weight: bolder;
    }

    p {
      margin-top: 0;

      font-size: 1.5rem;
    }

    button {
      all: unset;
      margin-left: 0rem;
      margin-top: 4rem;
      padding: 1rem;
      color: white;
      background: #e83f57;
      font-size: 1.5rem;
      font-weight: bold;
      align-self: flex-start;
      border-radius: 0.5rem;
      transition: ease-in 0.3s;
    }
    button:hover {
      transition: ease-in 0.3s;
      background: rgb(139, 0, 0);
    }
  }
}
</style>
