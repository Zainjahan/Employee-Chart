<template>
  <div>
      <div class="topnav">
  <a class="active" href="#home">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
</div>
<div class="container">
<div style="padding-left:16px">
    <h1> VUE JS FORM</h1>
</div>
    <ul>
      <li v-for="(value,index) in heros" :key="index.name">
        <div>
            {{index}}
          {{ value.name }}{{ index.name}}<br><button v-on:click="remove(index)">x</button>
          <br>
          <input/>
          
        </div>
      </li>
    </ul>
    <form @submit.prevent="addhero">
        <input v-model="newhero" placeholder="hero name here"/><br><br>
        <button style="font-size:24px" type="submit">Add Hero<i class="fa fa-check-square"></i></button>
    </form>
</div>

  </div>
</template>
<script>
export default {
  computed: {
    herosCount() {
      return this.heros.length;
    },
  },
  methods: {
    addhero() {
      if (this.newhero !== "") {
        this.heros.push({ name: this.newhero });
        this.newhero = "";
      }
    },
    remove(index) {
      console.log(index);
      console.log(this.heros);
      this.heros = this.heros.filter((heroCount, i) => i !== index);
    },
  },
  data() {
    return {
      newhero: "",
      heros: [{ name: "Arrow" }, { name: "Flash" }, { name: "Batsman" }],
    };
  },
};
</script>
<style scoped>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: gray;
}

.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #04AA6D;
  color: white;
}
</style>