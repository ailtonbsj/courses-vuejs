<template>
  <div class="footer">
    <span>Copyright <strong>Cod3r</strong> &copy; 2015-2018.</span>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style>
.footer {
  grid-area: footer;
  background: #ddd;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 10px;
}
</style>