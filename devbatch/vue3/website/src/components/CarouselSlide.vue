<template>
<transition name="left">
  <div v-show="visibleSlide === index" class="carousel-slide">
    <slot></slot>
  </div>
</transition>
</template>

<script>
export default {
  props: ["visibleSlide", "index"],
  data() {
    return {};
  },
};
</script>

<style>
.crousel-slide{
    position: absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
}
.left-enter-active{
    animation:leftInAnimation  0.4s ease-in-out;
}
.left-leave-active{
    animation:leftInAnimation 0.4s ease-in-out;
}

@keyframes LeftInAnimation{
    from{transform: translateX(100%);}
    to{transform:translateX(0);}
    }
@keyframes LeftInAnimation{
    from{transform: translateX(0);}
    to{transform:translateX(-100%);}
    }
</style>
