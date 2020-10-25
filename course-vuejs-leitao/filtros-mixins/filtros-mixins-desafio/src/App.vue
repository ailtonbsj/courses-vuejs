<template>
  <div id="app">
    <h1>Filtros & Mixins (Desafio)</h1>

    <p>{{ "Pedro é legal" | spaceToComa }}</p>

    <p>{{ "Pedro é legal" | contLettersWords }}</p>

    <p>{{ phrase }} | {{ phrasewithComa }} | {{ phraseWordsLen }}</p>

    <!-- Exercício 4 -->
    <!-- Compartilhe a propriedade computada via mixin -->
  </div>
</template>

<script>
import ComputedMixin from "./computedMixin";

export default {
  mixins: [ComputedMixin],
  filters: {
    spaceToComa(input) {
      return input.replace(/\s/g, ",");
    },
    contLettersWords(input) {
      return input
        .split(" ")
        .map((word) => `${word} (${word.length})`)
        .join(" ");
    },
  },
  data() {
    return {
      phrase: "Peter is nice",
    };
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
</style>
