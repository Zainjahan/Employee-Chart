<template>
  <div>
    <h1>Programming Languages Projects</h1>
    <ul>
      <li v-for="(key,index) in programmings" :key="index.id">{{index}}{{index.id}}{{key}}</li>
    </ul>

    <form @submit.prevent="newprogramming='R'">
    <input v-model.lazy="newprogramming"/>
    <button type="submit">Add programming language</button>
    </form>
  </div>
</template>
<script>
export default {

  data() {
      
    return {
        
     newprogramming:"R",
      programmings: [{ name: "oop" ,id:1}, {name: "dsa",id:2}, {name: "vp",id:3 },
      ]
    };
  },
};
</script>
<style scoped>
</style>