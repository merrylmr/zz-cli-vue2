<template>
  <div class="home">
    <h1>技术栈</h1>
    <p>vue</p>
    <p>vuex</p>
    <p>axios</p>
    <p>vue-router</p>
    <p>scss</p>
  </div>
</template>

<script>


  export default {
    name: 'Home',
    components: {}
  }
</script>
<style scoped lang="scss">
  .home {
    color: $main-color;

    p {
      color: $second-color;
    }
  }
</style>