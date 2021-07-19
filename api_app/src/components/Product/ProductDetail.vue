<template>
<div class="">
    <Header/>
    <!-- <h1 :show="$route.params.id">Product detail</h1> -->
    <div class="container-fluid m-5">
      <div class="imgProduct d-flex flex-wrap">
        <div class="imgTop col-5">
          <img class="imgTop" :src="productDetail.image" alt="">
        </div>
        <div class="desProduct col-7 text-left">
          <h2>{{productDetail.name}}</h2> 
          <p>Chưa Có Đánh Giá | 0 Đã Bán</p>
          <h4 style="color:#ee4d2d">₫ {{productDetail.price}}</h4> 
          <div class="colorProduct d-flex">
            <p class="col-2">Màu</p>
            <div class="colorPicked col-10">
              <button class="btn btn-outline-secondary mx-1">Trắng</button>
              <button class="btn btn-outline-secondary mx-1">Đen</button>
              <button class="btn btn-outline-secondary mx-1">Đỏ</button>
              <button class="btn btn-outline-secondary mx-1">Xanh</button>
            </div>
          </div>
           <div class="colorProduct d-flex align-items-center mt-3">
            <p class="col-2">Size</p>
            <div class="colorPicked col-10">
              <button class="btn btn-outline-secondary mx-1">37</button>
              <button class="btn btn-outline-secondary mx-1">38</button>
              <button class="btn btn-outline-secondary mx-1">39</button>
              <button class="btn btn-outline-secondary mx-1">40</button>
            </div>
          </div>
          <div class="buttonCart d-flex flex-wrap mt-5">
            <button class="add btn btn--l m-2" @click="addToCart(productDetail)">Thêm Vào Giỏ Hàng</button>
            <button class="buy btn btn--l m-2">Mua Ngay</button>
          </div>
        </div>
      </div>
      
    </div>

</div>
</template>

<script>
import axios from 'axios'
import Header from '../Layout/Header.vue'
export default {
  components:{
    Header
  },
  data(){
    return{
      productDetail:{},
    }
  },
  created(){
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
    },
    addToCart(product){
      alert("Thêm sản phẩm "+ product.name + "  Thành công !")
    }
  },

}
</script>

<style scoped>
.imgTop{
  width: 100%;
  max-height: 370px;
  object-fit: contain;
}
.buy{
  background-color: #ee4d2d;
  color: white;
}
.add{
  background-color: #ffeee8;
  color: #f06043;
  border: 1px solid #ee4d2d;
}
.add:hover{
  background-color: white;
  color: #f06043;
  border: 1px solid #ee4d2d;
}
.buy:hover{
  background-color: #f3593b;
}
</style>
