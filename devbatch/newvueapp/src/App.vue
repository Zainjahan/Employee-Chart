<template>
<div id="app" class="container">
  <img src="./assets/logo.png" class="logo">
  <todo-list></todo-list>
  <Greet name="zain" :heroname="'zain'"/>
  <input v-model="message" placeholder="edit me">
<p>message me:{{ message }}</p>

  <Greet></Greet>
  <HelloWorld></HelloWorld>
  <z></z>
  </div> 
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TodoList from './components/TodoList.vue'
import Greet from './components/Greet.vue'
import z from './components/z.vue'





export default {
  name: 'App',
  components: {
    HelloWorld,
    TodoList,
    Greet,
    z,

  },
  
}
</script>

<style>
*{
  box-sizing: border-box;
}
.container{
  max-width: 600px;
  margin:0 auto;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}

.logo{
  display: block;
  margin:20px auto;
  height:75px;
}
</style>
