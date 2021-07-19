<template>
  <div class="Carousel">
    <slot></slot>

    <button @onclick="next" class="next">Next</button>
    <button @onclick="prev" class="prev">Previous</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    next() {
        this.$emit('next');
    },
    prev() {
        this.$emit('prev');
    },
  },
};
</script>

<style>
.carousel {
  position: relative;
  width: 600px;
  height: 350px;
  overflow: hidden;
}

button {
  position: absolute;
  height: 40px;
  width: 50px;
  top: 10px;
  color: aqua;
  border: none;
}

button:focus,
button:hover {
  outline: none;
  cursor: pointer;
}
.next {
  right: 0;
}
.left {
  left: 0;
}
</style>
