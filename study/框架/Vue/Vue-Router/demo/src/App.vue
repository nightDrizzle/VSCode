<template>
  <div id='app'>
    <router-link to='/home'>home</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
ul {
  
  height: 50px;
}
ul li {
  float: left;
  margin: 10px;
  background-color: red;
}
ul li>a {
  color:#fff;
  text-decoration:none;
}
.clearfix::after {
  content: '';
  display: block;
  clear: both;
  height: 0;
  visibility: hidden;
}
</style>
