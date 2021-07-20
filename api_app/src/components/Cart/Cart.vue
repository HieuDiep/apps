<template>
  <div class="cart">
      <Header/>
      <div class="container-fluid">
        <div class="cartContainer">
          <div class="pickAll d-flex flex-wrap my-3 align-items-center py-3">
            <div class="col-1">
              <input type="checkbox" >
            </div>
            <div class="col-6">
              Sản phẩm
            </div>
            <div class="col-1 mx-2">
              Đơn giá
            </div>
            <div class="col-1 mx-2">
              Số lượng
            </div>
            <div class="col-1 mx-2">
              Số tiền
            </div>
            <div class="col-1 mx-2">
              Thao tác
            </div>
          </div>
          <ul v-for="product in productCart" :key="product.id" class="list_product d-flex flex-column align-items-center my-2 py-2 px-0  ">
            <div class="col d-flex flex-wrap align-items-center m-3">
              <input class="col-1" type="checkbox">
              <p class="m-0">Yêu thích+</p>
              <div class=""><b> Thiên đường hàng Nhật</b></div>
              <img class="" src="../../assets/chat.png" alt="">
            </div>
            <div class="col d-flex flex-wrap product py-4">
              <li class="col-1">
                <input type="checkbox" >
              </li>
              <li class="col-6">
                <img class="img_cart" :src="product.image" alt="">
              </li>
              <li class="col-1 mx-2">
                ₫ {{product.price}}
              </li>
              <li class="col-1 mx-2">
                1
              </li>
              <li class="col-1 mx-2">
                ₫ {{product.price}}
              </li>
              <li class="col-1 mx-2">
                <p class="del_product m-0">Xóa</p>
              </li>
            </div>
            <div class="col text-left">  Miễn Phí Vận Chuyển cho đơn hàng từ ₫50.000 (giảm tối đa ₫25.000)</div>
      </ul>
    </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
import Header from "../Layout/Header.vue"
export default {
    components:{
        Header,
    },
    data(){
      return{
        productCart:[],
      }
    },
    created(){
      axios.get("http://localhost:3000/cart/")
      .then((res)=>{
        console.log(res)
        this.productCart = res.data;
      })
      .catch((res)=>{
        console.log(res)
      })
    }
}
</script>

<style>
.cart{
  background-color: #f5f5f5;
  height: 100vh;
}
.cartContainer{
    width: 90%;
    margin: 0 auto;
}
.img_cart{
    width: 100px;
    height: 70px;
    object-fit: cover;
}
.list_product{
  list-style-type: none;
  background-color: #e8e8e8;
  border: 1px solid #e8e8e8;

}

.pickAll{
  background-color: white;
}

.del_product{
  cursor: pointer;
}
.del_product:hover{
  color: #ee5031;
}
.product{
  border-top: 1px solid #d3d3d3;
  border-bottom: 1px solid #d3d3d3;
}
</style>