<template>
  <div class="position-relative container-fluid">
    <h4 class="m-3">BẢNG DANH SÁCH</h4>
    <font-awesome-icon icon="fa-long-arrow-alt-left" class="mr-2" />
    <input
      type="text"
      @keydown.enter="filterByName(nameFilter)"
      v-model="nameFilter"
      placeholder="Find Name"
    />
    <input
      type="date"
      class="mx-2"
      placeholder="from year"
      v-model="fromYear"
    />
    <input
      type="date"
      placeholder="to year"
      v-model="toYear"
      @keydown.enter="filterByYear(fromYear, toYear)"
    />
    <!-- <div class="btn m-2" @click="filterByYear(fromYear,toYear)"><font-awesome-icon icon="filter" /></div> -->
    <div
      @click="funcAdd"
      class="add float-right ml-5 add d-flex align-items-center btn-sm pointer"
    >
      <font-awesome-icon icon="plus" class="mr-2" />
      <div class="px-2">Add</div>
    </div>
    <br />
    <div class="dialog_del containbox position-absolute" v-if="del_show">
      <form action="">
        <div class="contain_del">
          <h4 class="del_head">Delete data</h4>
          <p class="p-3 text-danger">Are you sure you want to delete your data ?</p>
          <div class="clearfix d-flex justify-content-end">
            <button
              type="button"
              class="btn-sm btn-primary"
              @click="del_show = false"
            >
              Cancel
            </button>
            <button
              type="button"
              class="btn-sm btn-danger mx-3"
              @click="deletedata(temp_item)"
            >
              Delete
            </button>
          </div>
        </div>
      </form>
    </div>
    <div class="containbox position-absolute border" v-if="show">
      <form action="" class="">
        <h4 class="p-2 m-0 head_add">Add Data</h4>
        <div class="row mx-3">
          <div class="col mt-3">
            <label for="">Name</label><br />
            <input class="input" type="text" v-model="name" /> <br />
            <label for="">Price</label><br />
            <input class="input" type="text" v-model="id" /> <br />
            <label for="">Link</label><br />
            <input class="input" type="text" v-model="link" /> <br />
          </div>
          <div class="col mt-3">
            <label for="">Description</label><br />
            <input class="input" type="text" v-model="description" /> <br />
            <label for="">Created at</label><br />
            <input class="input" type="date" v-model="created_at" /> <br />
            <label for="">Updated at</label><br />
            <input class="input" type="date" v-model="updated_at" /> <br />
          </div>
        </div>
        <div class="d-flex justify-content-end">
          <button @click="show = false" class="btn btn-sm btn-light btn_back m-2">
            <font-awesome-icon icon="fa-arrow-left" />
            Back
          </button>
          <button type="submit" @click="addNew()" class="btn btn-sm btn-primary m-2">
            Submit
          </button>
        </div>

      </form>
    </div>
    <table class="table mt-3 border">
      <tr class="headerTbl">
        <th scope="col">Name</th>
        <th scope="col">Price</th>
        <th scope="col">Link</th>
        <th scope="col">Description</th>
        <th scope="col">Created at</th>
        <th scope="col">Updated at</th>
        <th scope="col">Action</th>
      </tr>
      <tbody>
        <tr v-for="(item, i) in ProductInstance" :key="i" class="">
          <td>
            <span class="data_inline">{{ item.name }}</span>
          </td>
          <td>
            <span class="data_inline">{{ item.id }}</span>
          </td>
          <td>
            <span class="data_inline">{{ item.link }}</span>
          </td>
          <td>
            <span class="data_inline">{{ item.description }}</span>
          </td>
          <td>
            <span class="data_inline">{{ item.created_at }}</span>
          </td>
          <td>
            <span class="data_inline">{{ item.updated_at }}</span>
          </td>
          <td class="d-flex justify-content-center">
            <div class="pointer" @click="editItem(item, i)">
              <font-awesome-icon icon="edit" />
            </div>
            <div class="btn_del text-danger pointer" @click="comf_delete(item)">
              <font-awesome-icon icon="trash-alt" />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  component: {},
  data() {
    const initProductInstance = [
      {
        id: 5400,
        name: "Xe máy",
        link: "https://infotrac.gale.com/itweb",
        description: "Phân khối lớn",
        created_at: "2022-07-31",
        updated_at: null,
      },
      {
        id: 53000,
        name: "Ô tô",
        link: "https://infotrac.gale.com/",
        description: "Toyota",
        created_at: "2003-07-31",
        updated_at: "2021-07-31",
      },
      {
        id: 400000,
        name: "Nhà",
        link: "https://infotrac.gale.com",
        description: "được làm bằng gỗ",
        created_at: "2000-07-31",
        updated_at: "2021-07-31",
      },
      {
        id: 200,
        name: "Áo",
        link: "https://infotrac.gale.com",
        description: "Lông cừu",
        created_at: "2019-07-31",
        updated_at: "2021-07-31",
      },
      {
        id: 500,
        name: "Áo",
        link: "https://infotrac.gale.com",
        description: "da",
        created_at: "2015-07-1",
        updated_at: "2021-07-31",
      },
    ];
    return {
      temp_item: "",
      del_show: false,
      fromYear: "",
      toYear: "",
      nameFilter: "",
      add: true,
      show: false,
      temp: "",
      tempItem: "",
      id: "",
      name: "",
      link: "",
      description: "",
      created_at: "",
      updated_at: "",
      ProductInstance: initProductInstance,
      ProductInstance2: initProductInstance,
    };
  },
  watch: {},
  methods: {
    filterByName(e) {
      if (e != "") {
        const a = this.ProductInstance2.filter((item) => {
          console.log(item.name == e);
          return item.name == e;
        });
        console.log(a);
        this.ProductInstance = a;
      }
    },
    filterByYear(fromYear, toYear) {
      console.log(fromYear, toYear);
      const a = this.ProductInstance2.filter((item) => {
        return fromYear <= item.created_at && item.created_at <= toYear;
      });
      this.ProductInstance = a;
    },
    funcAdd() {
      this.show = true;
      this.add = true;
    },
    addNew() {
      if (this.add && this.name != "") {
        this.ProductInstance.push({
          id: this.id,
          name: this.name,
          link: this.link,
          description: this.description,
          created_at: this.created_at,
          updated_at: this.updated_at,
        });
        this.show = false;
      } else {
        this.tempItem = {
          id: this.id,
          name: this.name,
          link: this.link,
          description: this.description,
          created_at: this.created_at,
          updated_at: this.updated_at,
        };
        console.log("edit ------", this.tempItem);
        this.ProductInstance[this.temp] = this.tempItem;
        this.show = false;
      }
    },
    comf_delete(item) {
      console.log("hello");
      this.del_show = true;
      this.temp_item = item;
    },
    deletedata(item) {
      let index = this.ProductInstance.indexOf(item);
      this.ProductInstance.splice(index, 1);
      this.del_show = false;
    },
    editItem(item, i) {
      this.show = true;
      this.add = false;
      this.id = item.id;
      this.name = item.name;
      this.link = item.link;
      this.description = item.description;
      this.created_at = item.created_at;
      this.updated_at = item.updated_at;
      this.temp = i;
      console.log(i);
    },
  },
};
</script>
<style scoped>
.form_box {
  margin: 0 auto;
}
.btn_del {
  margin-left: 5px;
}
.containbox {
  right: 25%;
  background-color: #d6d6d6;
  box-shadow: 1px 1px 1px 3px #e0e0e0;
}
.pointer {
  cursor: pointer;
}
.add {
  float: right;
  margin-right: 20px;
  background-color: rgb(119, 119, 255);
  color: white;
}
.headerTbl {
  background-color: rgb(119, 119, 255);
  color: white;
  height: 44px;
  font-size: 16x;
}
.dialog_del {
  right: 35%;
  padding-bottom:15px;
  background-color: #f0f0f0;
  box-shadow: 1px 1px 1px 3px #e0e0e0;
}
.data_inline {
  display: block;
  /* -webkit-line-clamp: 1; */
  /* -webkit-box-orient: vertical; */
  text-overflow: ellipsis;
  max-width: 300px;
  white-space: nowrap;
  overflow: hidden;
  font-size: 14px;
}
.del_head{
  background-color:  rgb(119, 119, 255);
    color: white;
    font-weight: 500;
    padding: 5px;
}
.head_add{
  background-color: #0d6efd;
    color: white;
}
</style>
