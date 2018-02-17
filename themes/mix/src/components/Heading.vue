<template>
  <div class="heading">
    {{ body }}
  </div>
</template>

<script>
  export default {
    data() {
      return {
        body: 'I am a heading.'
      }
    }
  }
</script>

<style scoped>
  .heading {
    background: green;
  }
</style>