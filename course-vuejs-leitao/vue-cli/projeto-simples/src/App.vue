<template>
  <div id="app">{{ titulo }}</div>
</template>

<script>
export default {
  data: function() {
    return {
      titulo: 'Teste Data usando VueJS'
    }
  }
}
</script>

<style>
  #app {
    background-color: chocolate;
    color: #fff;
  }
</style>