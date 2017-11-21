<template>
  <transition name="slide"><div>
    <h1>Goals</h1>
    <hr>
    <h1>Goals: {{ $route.query.newName}}</h1>
  </div></transition>
</template>

<script>

</script>

<style>
  .slide-enter {
    opacity: 0;
  }

  .slide-enter-active {
    animation: slide-in 1s ease-out forwards;
    transition: opacity 1s;
  }

  .slide-leave {

  }

  .slide-leave-active {
    animation: slide-out 1s ease-out forwards;
    transition: opacity 1s;
    opacity: 0;
  }
</style>
