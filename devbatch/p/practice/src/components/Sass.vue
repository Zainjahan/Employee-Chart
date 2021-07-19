<template>
    <div id="bind-attribute" class="demo">
  <span v-bind:title="message">
    Hover your mouse over me for a few seconds to see my dynamically-bound
    title! 
  </span>
</div>
</template>
<script>
export default {
    name:'Sass',
  data() {
    return {
      message: 'You loaded this page on ' + new Date().toLocaleString()
    }
  }
}

</script>
<style scoped>
.demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}
</style>