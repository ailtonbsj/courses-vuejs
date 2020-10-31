<template>
  <div class="usuario">
    <h2>Usuários</h2>
    <hr />
    <router-view></router-view>
    <button sucesso @click="irParaInicio">Voltar</button>
  </div>
</template>

<script>
export default {
  methods: {
    irParaInicio() {
      // this.$router.push("/");
      this.$router.push({ name: 'inicio'});
    },
  },
  // props: {
  //   id: {
  //     type: String,
  //     required: true
  //   }
  // },
  // data() {
  //   return {
  //     id: this.$route.params.id,
  //   };
  // },
  // watch: {
  //   $route(to, from) {
  //     this.id = to.params.id
  //   }
  // }
};
</script>

<style>
</style>