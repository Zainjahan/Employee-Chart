<template>
  <div v-if="showImageLeft" class="left-aligned-image">
    <img :src="image" />
    <span class="b">
      {{ text }}
    </span>
  </div>
  <div v-else class="right-aligned-image">
    <span class="b">
      {{ text }}
    </span>
    <img :src="image" />
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
</style>
