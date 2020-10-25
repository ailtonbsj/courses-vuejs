<template>
  <div id="app">
    <h1>Filtros</h1>
    {{ cpf | inverter | cpf }}
    <h1>Mixins</h1>
    <Frutas />
    <div>
      <ul>
        <li v-for="(fruta, i) in frutas" :key="i">
          {{ fruta }}
        </li>
      </ul>
      <input type="text" v-model="fruta" @keydown.enter="add" />
    </div>
  </div>
</template>

<script>
import Frutas from "./Frutas.vue"
import FrutasMixin from './frutasMixin'
export default {
  mixins: [FrutasMixin],
  components: {
    Frutas,
  },
  filters: {
    cpf(valor) {
      const arr = valor.split("");
      arr.splice(3, 0, ".");
      arr.splice(7, 0, ".");
      arr.splice(11, 0, "-");
      return arr.join("");
    },
  },
  data() {
    return {
      cpf: "12345678909",
    }
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
  font-size: 1.2rem;
}
</style>
