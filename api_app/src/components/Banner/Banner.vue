<template>
  <div class="content-fluid m-4">
    <div class="banner d-flex">
      <div class="banner_left col-8">
        <div>
          <transition-group name="fade" tag="div">
            <div v-for="i in [currentIndex]" :key="i">
              <img class="img_banner" :src="currentImg" />
            </div>
          </transition-group>
          <a class="prev" @click="prev" href="#">&#10094;</a>
          <a class="next" @click="next" href="#">&#10095;</a>
          <ul class="dot d-flex justify-content-center">
            <li class="" @click="currentIndex = 0"></li>
            <li class="" @click="currentIndex = 1"></li>
            <li class="" @click="currentIndex = 2"></li>
            <li class="" @click="currentIndex = 3"></li>
          </ul>
        </div>
      </div>
      <div class="banner_right col-4">
        <div>
          <img class="banner_r" src="../../assets/Banner/bannerR.png" />
        </div>
        <div>
          <img class="banner_r" src="../../assets/Banner/bannerR2.png" />
        </div>
      </div>
    </div>
    <div class="bannerButton d-flex">
      <a href="" class="col">
        <div class="bItem">
          <div class="itemImg"></div>
          <p>Ở Nhà Không Khó</p>
        </div>
      </a>
      <a href=""></a>
      <a href=""></a>
      <a href=""></a>
      <a href=""></a>
      <a href=""></a>
      <a href=""></a>
      <a href=""></a>
      <a href=""></a>
      <a href=""></a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "https://cf.shopee.vn/file/efbce9c52e9fd10e7d6640008aca0a7f_xxhdpi",
        "https://cf.shopee.vn/file/014918fae7cced891e6693169e83dee2_xxhdpi",
        "https://cf.shopee.vn/file/b9225209d84f3ce9532c9ec6b9de21c0_xxhdpi",
        "https://cf.shopee.vn/file/48b9ed4225c978115abc5687ab607852_xxhdpi",
      ],
      timer: null,
      currentIndex: 0,
    };
  },
  mounted: function () {
    this.startSlide();
  },

  methods: {
    startSlide: function () {
      this.timer = setInterval(this.next, 6000);
    },

    next: function () {
      this.currentIndex += 1;
    },
    prev: function () {
      this.currentIndex -= 1;
    },
  },

  computed: {
    currentImg: function () {
      return this.images[this.currentIndex % this.images.length];
    },
  },
};
</script>

<style>
.itemImg {
  background-image: url(https://cf.shopee.vn/file/53d059b1f2592c05b8df8ae835950a2b_xhdpi);
  background-size: contain;
  background-repeat: no-repeat;
}
.slide_show {
  object-fit: cover;
}
.img_banner {
  width: 820px;
  height: 240px;
}
.banner_r {
  width: 400px;
}

.slide {
  width: 725px;
}
.fade-enter-active {
  position: absolute;
}

.fade-leave-active {
  transition: ease 2;
  position: absolute;
}

.fade-enter,
.fade-leave-to {
}

.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  margin: 0 20px;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}
.dot {
  cursor: pointer;
  position: absolute;
  top: 80%;
  width: 100%;
  color: rgb(0, 0, 0);
  font-weight: bold;
  font-size: 13px;
  transition: 0.7s ease;
  border-radius: 30px;
  text-decoration: none;
  user-select: none;
  list-style-type: none;
}
.dot li {
  display: inline-block;
  width: 5px;
  height: 5px;
  border: 5px solid darkgrey;
  border-radius: 50px;
  margin: 10px;
  cursor: pointer;
}
.next {
  right: 0;
}

.prev {
  left: 0;
}

.prev:hover,
.next:hover {
  background-color: rgba(175, 175, 175, 0.9);
  opacity: 0.3;
}
</style>
