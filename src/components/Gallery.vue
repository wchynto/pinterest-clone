<template>
  <div class="container">
    <masonry-wall :items="images"  :ssr-columns="1" :column-width="200" :gap="16">
      <template #default="{ item, index }" >
        <Card :imgSrc="item.src.original" ></Card>
      </template>
    </masonry-wall>
  </div>
</template>

<script>
import Axios from "axios";
import Card from "./partials/Card.vue";

export default {
  name: "Gallery",
  components: { Card },
  data() {
    return {
      images: [],
    };
  },
  mounted() {
    Axios.get("https://api.pexels.com/v1/curated?page=1&per_page=100", {
      headers: {
        Authorization:
          "llRT5DnJzq2SzhHJqMUFpPAZUJA9cxmo0EcbcbhiYZdgg8BMiiKHW5oy",
      },
    })
      .then((res) => {
        this.images = res.data.photos;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>