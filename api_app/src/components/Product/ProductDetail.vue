<template>
<div class="">
    <h1 v-show="$route.params.id">Product detail</h1>
    <img :src="productDetail.image" alt="">
    {{productDetail.name}}

</div>
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return{
      productDetail:{},
    }
  },
  mounted(){
    this.getProductDetail();
  },
  methods:{
    getProductDetail(){
       let idDetail = this.$route.params.id;
        axios.get("http://localhost:3000/products/" + idDetail)
        .then((res) => {
           this.productDetail = res.data;
        })
        .catch((res) => {
          console.log(res);
        });
    }
  },

}
</script>

<style scoped></style>
