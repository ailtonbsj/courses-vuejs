<template>
  <div class="usuario">
    <h2>Usuários</h2>
    <hr />
    <p><strong>Código: </strong> {{ idx }}</p>
    <button sucesso @click="irParaInicio">Voltar</button>
  </div>
</template>

<script>
export default {
  methods: {
    irParaInicio() {
      this.$router.push("/");
    },
  },
  data() {
    return {
      idx: this.$route.params.id,
    };
  },
};
</script>

<style>
</style>