<template>
  <div class="notification">
    {{ body }}
  </div>
</template>

<script>
  export default {
    data() {
      return {
        body: 'I am a notification.'
      }
    }
  }
</script>

<style scoped>
  .notification {
    background: grey;
  }
</style>