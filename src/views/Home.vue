<template>
  <div class="home">
    <div class="grid">
      <router-link :to='/poster/' + poster.id >

      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
}
</script>
