<template>
  <div class="usuario-detalhe">
    <h3>Usuário Detalhe</h3>
    <hr />
    <p><strong>Código: </strong> {{ id }}</p>
    <!-- <router-link tag="button" :to="`${id}/editar`" primario>Editar</router-link> -->
    <router-link tag="button" :to="{ name: 'editar-usuario', params: {id} }" primario>Editar</router-link>
  </div>
</template>

<script>
export default {
  props: ["id"],
};
</script>

<style>
</style>