<template>
    <ul class="nav nav-pills">
      <router-link to="/component1" tag="li" active-class="active" exact><a>About Me</a></router-link>
      <router-link :to="{name: 'goals' , query: {newName: 'To graduate!!'}}" tag="li" active-class="active"><a>Goals</a></router-link>
      <router-link to="/component3" tag="li" active-class="active"><a>Favorite Movies</a></router-link>
    </ul>
</template>

<script>

</script>

<style>


</style>
