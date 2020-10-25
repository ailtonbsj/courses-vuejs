<template>
  <div>
    <ul>
      <li v-for="(fruta, i) in frutas" :key="i">
          {{ fruta }}
      </li>
    </ul>
    <input type="text" v-model="fruta" @keydown.enter="add">
  </div>
</template>

<script>
import FrutasMixin from './frutasMixin'
export default {
    mixins: [FrutasMixin],
    created() {
        console.log('Frutas Component');
    }
};
</script>

<style>
</style>