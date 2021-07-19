<template>
  <div>
    <Navigation />
    <div style="display: flex; flex-direction: row">
      <div flex w-50>
        <CustomGraph />
        <CustomLine />
        <CustomPie />
        <Stackbar/>
    
      <ImageAlignedText />
      <Footer />
    </div>
  </div>
    </div>
  
  
</template>

<script>
import Navigation from "./components/Navigation.vue";
import CustomGraph from "./components/CustomGraph.vue";
import CustomPie from "./components/CustomPie.vue";
import CustomLine from "./components/CustomLine.vue";
import ImageAlignedText from "./components/ImageAlignedText.vue";
import Footer from "./components/Footer.vue";
import Stackbar from "./components/Stackbar.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    Navigation,
    CustomGraph,
    CustomLine,
    ImageAlignedText,
    Footer,
    CustomPie,
    Stackbar
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: gray;
}

</style>
