<template>
  <div class="container-fluid">
    <Banner />
    <List :dataList="dataList" />
  </div>
</template>
<script>
import List from "../Product/List.vue";
import Banner from "../Banner/Banner.vue";
export default {
  props: ["dataList"],
  components: {
    List,
    Banner,
  },
};
</script>
