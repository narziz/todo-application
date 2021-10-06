<template>
  <todo />
</template>

<script>
import todo from './components/todo.vue'

export default {
  name: 'App',
  components: {
    todo
  }
}
</script>

<style>
*{
  box-sizing: border-box;
}
body{
  height: 100vh;
  background: #159957;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #155799, #159957);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right bottom, #155799, #159957); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
