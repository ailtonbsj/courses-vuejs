<template>
  <div class="citacao">
    <slot name="autor"></slot>
    <slot name="texto"></slot>
    <slot name="fonte"></slot>
  </div>
</template>

<script>
export default {
  created() {
      console.log('Created citacao')
  },
  detroyed() {
      console.log('Destroyed citacao')
  },
  activated() {
      console.log('Activated citacao')
  },
  deactivated() {
      console.log('Deactivated citacao')
  }
}
</script>

<style scoped>
.citacao {
  border: 1px solid #ddd;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 25px;
  max-width: 450px;
}
</style>
