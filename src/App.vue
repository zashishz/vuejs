<template>
  <div id="app">
    <home-tag></home-tag>
    </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
  body {
    padding: 20px;  
    box-sizing: border-box;
  }
  #app {
    box-sizing: border-box;
    width: 100%;
    height: 400px;
    background-color: thistle;
    padding: 30px;
  }
</style>
