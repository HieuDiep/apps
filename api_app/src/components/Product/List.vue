<template>
  <div class="">
    <ul class="d-flex flex-wrap ul_product m-3">
      <ProductItem
        v-for="product in dataList"
        :key="product.id"
        v-bind:product="product"
      />
    </ul>
  </div>
</template>
<script>
import ProductItem from "./ProductItem.vue";
export default {
  props: ["dataList"],
  components: {
    ProductItem,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.ul_product {
  list-style-type: none;
}
</style>
