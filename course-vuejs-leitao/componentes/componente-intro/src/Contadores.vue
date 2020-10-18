<template>
  <div class="contadores">
      <contador v-for="c in 2" :key="c" />
  </div>
</template>

<script>
import Contador from './Contador.vue'
export default {
    components: {
        Contador
    }
}
</script>

<style>

</style>