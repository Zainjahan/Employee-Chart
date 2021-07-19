<template>
  <div v-if="showImageLeft" class="left-aligned-image gray-back">
    <img :src="image" class="image"/>
    <span class="text">
      {{ text }}
    </span>
  </div>
  <div v-else class="right-aligned-image light-gray-back">
    <span class="text">
      {{ text }}
    </span>
    <img :src="image" class="image" />
  </div>
</template>
<script>
export default {
  name: "Row",
  props: {
    showImageLeft: Boolean,
    image: String,
    text: String,
    title: String,
  },
  data() {
    return {};
  },
};
</script>
<style >
.left-aligned-image, .right-aligned-image {
  display: flex;
  flex-direction: row;
}
.image {
    width:1000px;
    height:350px;
    padding:10px;
    border-radius: 25px;
}
.text{
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.gray-back{
      background-color: gray;
      border-top-right-radius: 10px;
      border-bottom-left-radius: 10px;
      
}

.light-gray-back{
    background-color: lightgray;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
}
</style>
