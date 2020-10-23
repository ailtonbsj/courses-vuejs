<template>
  <div>
    <Rotulo name="Nome" name-id="in-nome">
      <input
        type="text"
        id="in-nome"
        v-model="nome"
        @input="setNomeCompleto(nome, sobrenome)"
      />
    </Rotulo>
    <Rotulo name="Sobrenome" name-id="in-sobrenome">
      <input
        type="text"
        id="in-sobrenome"
        v-model="sobrenome"
        @input="setNomeCompleto(nome, sobrenome)"
      />
    </Rotulo>
    <Rotulo name="Nome completo" name-id="in-nome-completo">
      <input
        type="text"
        id="in-nome-completo"
        v-model="nomeCompleto"
        readonly
      />
    </Rotulo>
  </div>
</template>

<script>
import Rotulo from "./Rotulo.vue";

export default {
  components: {
    Rotulo,
  },
  props: {
      value: {
          type: String,
          default: ''
      }
  },
  data() {
    return {
      nome: "",
      sobrenome: "",
      nomeCompleto: this.value,
    };
  },
  methods: {
    setNomeCompleto(nome, sobre) {
      this.nomeCompleto = `${nome} ${sobre}`
      this.$emit('input', this.nomeCompleto)
    },
  },
};
</script>

<style>
</style>