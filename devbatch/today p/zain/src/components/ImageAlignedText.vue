<template>
  <div class="gallery">
    <div id="demo">
      <div class="container">
          
        <Row
          v-for="row in pictures"
          :showImageLeft="row.ShowImageLeft"
          :image="row.path"
          :text="row.text"
          :title="row.title"
          :key="row.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Row from "./Row.vue";
export default {
  name: "ImageAlignedText",
  components: {
    Row,
  },
  data() {
    return {
      pictures: [
        {
          id: 1,
          path: "/assets/pic_trulli.jpg",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget laoreet dui, efficitur efficitur velit. Duis condimentum enim a enim venenatis, a varius felis fringilla. Donec mattis elit bibendum, ullamcorper risus eu, facilisis turpis. Nulla id tincidunt nulla. Duis pellentesque lorem vitae sem interdum interdum. Donec ante augue, aliquet id rutrum vitae, vehicula id dolor. Phasellus fringilla a tellus quis pulvinar. Suspendisse iaculis feugiat lorem, a ullamcorper nisl commodo tristique.",
          title: "Trulli",
          ShowImageLeft: true,
        },
        {
          id: 2,
          path: "/assets/img_chania.jpg",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget laoreet dui, efficitur efficitur velit. Duis condimentum enim a enim venenatis, a varius felis fringilla. Donec mattis elit bibendum, ullamcorper risus eu, facilisis turpis. Nulla id tincidunt nulla. Duis pellentesque lorem vitae sem interdum interdum. Donec ante augue, aliquet id rutrum vitae, vehicula id dolor. Phasellus fringilla a tellus quis pulvinar. Suspendisse iaculis feugiat lorem, a ullamcorper nisl commodo tristique.",
          title: "Chania",
          ShowImageLeft: false,
        }
    
      ],
    };
  },
};

</script>
<style>
#demo div {
  margin: 2.5px 2.5px;
}

img {
  display: block;
  width: 900px;
  height: 500px;
  
}

div.b {
  text-align: right;
}
.container {
  display: flex;
  flex-direction: column;
}
</style>