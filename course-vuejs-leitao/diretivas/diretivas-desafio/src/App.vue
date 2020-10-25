<template>
  <div id="app">
    <h1>Diretivas (Desafio)</h1>
    <hr />
    <button v-quando:click="handler">Meu botão</button>
    <button v-quando:mouseover="handler">Meu botão</button>
    <button v-quando:mousemove="handler">Meu botão</button>
  </div>
</template>

<script>
export default {
  directives: {
    quando: {
      bind(el, binding) {
        //el["on" + binding.arg] = binding.value
        el.addEventListener(binding.arg, binding.value)
      },
    },
  },
  methods: {
    handler() {
      alert("Evento escutado!");
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 2.5rem;
}

button {
  margin: 10px 0px;
  padding: 10px 20px;
  font-size: 1.4rem;
  border-radius: 5px;
  color: #fff;
  background-color: #2196f3;
}
</style>
