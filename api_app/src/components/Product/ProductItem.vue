<template>
  <li class="ul_data col-3 ">
    <img class="img" :src="product.image" alt="Card image cap" />
    <div class="des">
      <p class="card-text">{{ product.name }}</p>
      <p>{{ product.price }} VNĐ</p>
    </div>
  </li>
</template>
<script>
export default {
  props: ["product"],
};
</script>
<style scoped>
.img {
  width: 120px;
  height: 160px;
  object-fit: contain;
}

.ul_data {
  width: 250px;
}

.ul_data:hover {
  transform: scale(1.1);
  cursor: pointer;
  border: 1px solid red;
}
</style>
