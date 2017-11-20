<template>
  <transition name="fade" appear><div>
    <h1>About Me</h1>
    <hr>
    <p>I like long walks on the beach, scubadiving, and tomato soup</p>
  </div></transition>
</template>

<script>

</script>

<style>

  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity 1s;
  }

  .fade-leave {
    /* opacity: 1; */
  }

  .fade-leave-active {
    transition: opacity 0s;
    opacity: 0;
  }
</style>
