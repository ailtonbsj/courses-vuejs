<template>
  <div id="app">
    <h1>Diretivas</h1>
    <p v-text="'Usando diretiva <strong>v-text</strong>'"></p>
    <p v-html="'Usando diretiva <strong>v-html</strong>'"></p>
    <hr />
    <p v-destaque:fundo.atrasar="'lightgreen'">
      Usando diretiva personalizada.
    </p>
    <p v-destaque.atrasar="'lightblue'">Usando diretiva personalizada.</p>
    <p
      v-destaque-local:fundo.atrasar.alternar="{
        cor1: 'lightgreen',
        cor2: 'yellow',
        atraso: 2000,
        intervalo: 500,
      }"
    >
      Usando diretiva personalizada.
    </p>
    <p v-destaque-local.atrasar="{ cor1: 'lightgreen', atraso: 2000 }">
      Usando diretiva personalizada.
    </p>
  </div>
</template>

<script>
// Padrão das diretivas:
// <p v-diretiva:argumento.modificador1.modificador2="'valor'"></p>

export default {
  directives: {
    "destaque-local": {
      bind(el, binding) {
        let atraso = 0;
        if (binding.modifiers["atrasar"]) atraso = binding.value.atraso;
        let corNow = binding.value.cor1;
        setTimeout(() => {
          if (binding.modifiers["alternar"]) {
            setInterval(() => {
              corNow =
                corNow === binding.value.cor1
                  ? binding.value.cor2
                  : binding.value.cor1;
              if (binding.arg == "fundo") el.style.backgroundColor = corNow;
              else el.style.color = corNow;
            }, binding.value.intervalo);
          } else {
            if (binding.arg == "fundo")
              el.style.backgroundColor = binding.value.cor1;
            else el.style.color = binding.value.cor1;
          }
        }, atraso);
      },
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
  font-size: 1.5rem;
}
</style>
