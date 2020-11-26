<template>
  <div id="app">
    <validate></validate>
  </div>
</template>

<script>
import validate from "@/components/validate";
export default {
  name: 'App',
  components: {
    validate
  }
}
</script>

<style>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>