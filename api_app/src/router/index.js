import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import productDetail from "../components/Product/ProductDetail.vue";
import cart from "../components/Cart/Cart.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/productDetail/:id",
    name: "productDetail",
    component: productDetail
  },
  {
    path: "/cart",
    name:"cart",
    component:cart
  }
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
