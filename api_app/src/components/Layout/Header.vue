<template>
  <div class="nav container-fluid text-white">
    <div class="nav_top d-flex flex-row flex-wrap justify-content-between">
      <div class="nav_top_left d-flex align-items-center">
        <p class="m-2">Kênh người bán</p>
        <p class="m-2">Trở thành người bán shopee</p>
        <p class="m-2">tải ứng dụng</p>
        <p class="m-2">Kết nối</p>
        <div class="fb"></div>
      </div>
      <div class="nav_top_right d-flex">
        <p class="m-2">Thông báo</p>
        <p class="m-2">Hỗ trợ</p>
        <p class="m-2">Đăng ký</p>
        <p class="m-2">Đăng nhập</p>
      </div>
    </div>
    <div class="nav_bottom d-flex justify align-items-center">
      <div class="nav_brand col-3">
        <img
          class="img_brand"
          src="https://deo.shopeemobile.com/shopee/shopee-mobilemall-live-sg/assets/d010b985fc1475e559b6db819889703c.png"
          alt=""
        />
      </div>
      <div class="nav_search col-7 d-flex flex-column">
        <div class="col d-flex flex-row flex-wrap">
          <input
            type="text"
            class="search_input p-2"
            placeholder="Mum's club - Quà 5 triệu"
            v-model="textSearch"
            @keydown.enter="searchProduct($event)"
          />
          <button class="search_button" @click="searchProduct($event)">
            <div class="search"></div></button
          ><br />
        </div>
        <p class="m-0 text-left col">
          <a>Váy</a><a>Bông tẩy trang</a><a>Balo</a><a>Dép nữ</a><a>Quần</a
          ><a>Son</a><a>Áo phông</a>
        </p>
      </div>
      <div class="nav_cart col-2">
        <img src="" alt="" />
        <p>cart</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      textSearch: "",
    };
  },
  methods: {
    searchProduct() {
      this.$emit("dataSearch",this.textSearch);
    },
  },
};
</script>
<style scoped>
.img_product {
  width: 120px;
  height: 160px;
  object-fit: contain;
}
.img_brand {
  height: 100px;
  width: 150px;
  object-fit: contain;
}
.nav {
  background: linear-gradient(-180deg, #f53d2d, #f63);
  display: block;
}
.search {
  width: 100%;
  height: 100%;
  background-image: url("../../assets/search.png");
  background-color: tomato;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 5px;
}
.search_input {
  width: 89%;
  padding: 5px;
  background-color: white;
  border: none;
  text-decoration: none;
}
.search_button {
  width: 60px;
  height: 40px;
  padding: 5px;
  background-color: white;
  border: none;
}
.text-left {
  text-align: left;
}
a {
  margin-right: 13px;
  color: rgba(226, 226, 226, 0.54);
  font-size: 13px;
  cursor: pointer;
}
.fb {
  width: 20px;
  height: 20px;
  background-image: url("../../assets/fb.png");
  background-repeat: no-repeat;
}
</style>
