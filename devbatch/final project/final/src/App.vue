<template>
  <div id="app">
   <header>
     <navbar/>
   </header>
   <ImageAlignedText/>
   <Footer/>
   <Graph/>
  
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import ImageAlignedText from './components/ImageAlignedText.vue';
import Graph from './components/Graph.vue';


export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    ImageAlignedText,
    Graph 
  }
};
</script>


<style>
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
body{
  font-family: Arial, Helvetica, sans-serif;
}
header{
  width:100vw;
  background-color: black;
  padding: 15px;
}
html {
  scroll-behavior: smooth;
}

#section2 {
  height: 600px;
  background-color: pink;
}

</style>
