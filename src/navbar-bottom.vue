<template>
  <nav class="navbar is-fixed-bottom is-light">
    <div class="navbar-brand has-text-weight-bold">
      <span class="navbar-item" @click="showIndex=true">
        <img src="/dist/list.svg" class="fa" alt="">
        Liste
      </span>
      <span class="navbar-item" @click="random()">
        <img src="/dist/random.svg" class="fa" alt="">
        Aléatoire
      </span>
    </div>
  </nav>
</template>
<script>
  import 'font-awesome-svg-png/black/svg/random.svg'
  import 'font-awesome-svg-png/black/svg/list.svg'

  export default {}
</script>
<style scoped>
  .fa {
    height: 22px;
    margin-right: .5rem;
  }
</style>
