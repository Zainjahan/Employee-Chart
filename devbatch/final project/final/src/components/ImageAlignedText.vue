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
          text: "zain jahan",
          title: "Trulli",
          ShowImageLeft: true,
        },

        {
          id: 2,
          path: "/assets/img_chania.jpg",
          text: "zain jahan",
          title: "Chania",
          ShowImageRight: false,
        },
        {
        id:3,
        path:"/assets/img_chania copy.jpg",
        text:"jh",
        title:"flower",
        ShowImageLeft:true,
        }

      ],
    };
  },
};
</script>
<style>
#demo div {
  margin: 6px 8px;
}

img {
  display: block;
  width: 200px;
  height: 200px;
}

div.b {
  text-align: right;
}
.container {
  display: flex;
  flex-direction: column;
}
</style>