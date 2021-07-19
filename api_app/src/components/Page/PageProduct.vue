<template>
  <div>
    <Header @dataSearch="dataSearch = $event" />
    <ListProduct :dataList="filterData" />
  </div>
</template>

<script>
import Header from "@/components/Layout/Header";
import ListProduct from "@/components/Layout/ListProduct";
import axios from "axios";

export default {
  components: {
    Header,
    ListProduct,
  },
  data() {
    return {
      dataList: [],
      dataSearch: "",
    };
  },
  methods: {
    showdata() {
      console.log(this.dataSearch);
    },
  },
  created() {
    axios
      .get("http://localhost:3000/products/")
      .then((res) => {
        this.dataList = res.data;
        console.log(res);
      })
      .catch((res) => {
        console.log(res);
      });
  },
  computed: {
    filterData() {
      let arr = [...this.dataList];
      if (this.dataSearch !== "") {
        console.log(this.dataSearch);
        return arr.filter((item) =>
          item.name
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/đ/g, "d")
            .replace(/Đ/g, "D")
            .includes(
              this.dataSearch
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/đ/g, "d")
                .replace(/Đ/g, "D")
            )
        );
      }
      return arr;
    },
  },
};
</script>
