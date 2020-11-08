<template>
  <div id="app">
    <h1>Calculator</h1>
    <Calculator></Calculator>
  </div>
</template>

<script>
import Calculator from './main/Calculator'
export default {
  components: { Calculator }
}
</script>

<style>
@font-face {
  font-family: "RobotoMono";
  src: url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100&display=swap");
}

* {
  font-family: "RobotoMono", monospace;
}

body {
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;

  color: #ffff;
  background: linear-gradient(to right, rgb(83, 105, 118), rgb(41, 46, 73));
}
</style>