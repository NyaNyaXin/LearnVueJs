<template>
  <div id="app">
    <img src="./assets/logo.png"><br>
    <router-link to="/">Home</router-link>|
    <router-link to="/params/111/henhao">Params</router-link>|
    <router-link to="/gohome">goHome</router-link>
    <router-link to="/goparams/11/chen">goParams</router-link>
    <router-link to="/chenxin">chenxin</router-link>
    <router-link to="/home1">Home</router-link>|
    <router-link to="/aaa">aaaa</router-link>|


    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>

  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .fade{
    opacity: 0px;
  }
  .fade-enter-active{
    transition: opacity .5s;
  }
  .fade-leave{
    opacity: 1;
  }
  .fade-leave-active{
    opacity: 0;
    transition: opacity .5s;
  }
</style>
