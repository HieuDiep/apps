<template>
  <div class="position-relative container-fluid">
    <h4 class="m-3">BẢNG DANH SÁCH</h4>
    <font-awesome-icon icon="fa-long-arrow-alt-left" class="mr-2" />
    <input
      type="text"
      v-model="nameFilter"
      placeholder="Find Name"
      ref="input"
    />
    <input
      type="date"
      class="mx-2"
      placeholder="from year"
      v-model="fromYear"
    />
    <input type="date" placeholder="to year" v-model="toYear" />
    <!-- <div class="btn m-2" @click="filterByYear(fromYear,toYear)"><font-awesome-icon icon="filter" /></div> -->
    <div
      @click="funcAdd()"
      class="add float-right ml-5 add d-flex align-items-center btn-sm pointer"
    >
      <font-awesome-icon icon="plus" class="mr-2" />
      <div class="px-2">Add</div>
    </div>
    <br />
    <div class="dialog_del containbox position-absolute" v-show="del_show" @keydown="del_show = false" tabindex="0">
      <form action="">
        <div class="contain_del">
          <h4 class="del_head">Delete data</h4>
          <p class="p-3 text-danger">
            Are you sure you want to delete your data ?
          </p>
          <div class="clearfix d-flex justify-content-end">
            <button
              type="button"
              class="btn-sm btn-primary"
              @click="del_show = false"
            >
              Cancel
            </button>
            <button
              ref="del_focus"
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
    <div
      class="containbox position-absolute border"
      v-show="show"
      @keydown="show = false"
      tabindex="0"
      ref="edit_focus"
    >
      <form action="" class="">
        <h4 class="p-2 m-0 head_add">Add Data</h4>
        <div class="row mx-3">
          <div class="col mt-3">
            <label for="">Name</label><br />
            <input
              class="input"
              type="text"
              v-model="name"
              :class="{ errorInput: isErrors.name }"
              @focus="isErrors.name = false"
              ref="input2"
            />
            <br />
            <p class="text-danger text_err m-0" v-show="isErrors.name">
              {{ errors.name }}
            </p>
            <label for="">Price</label><br />
            <input
              class="input"
              type="text"
              v-model="id"
              :class="{ errorInput: isErrors.id }"
              @focus="isErrors.id = false"
            />
            <br />
            <p class="text-danger text_err m-0" v-show="isErrors.id">
              {{ errors.id }}
            </p>
            <label for="">Link</label><br />
            <input
              class="input"
              type="text"
              v-model="link"
              :class="{ errorInput: isErrors.link }"
              @focus="isErrors.link = false"
            />
            <br />
            <p class="text-danger text_err m-0" v-show="isErrors.link">
              {{ errors.link }}
            </p>
          </div>
          <div class="col mt-3">
            <label for="">Description</label><br />
            <input
              class="input"
              type="text"
              v-model="description"
              :class="{ errorInput: isErrors.description }"
              @focus="isErrors.description = false"
            />
            <br />
            <p class="text-danger text_err m-0" v-show="isErrors.description">
              {{ errors.description }}
            </p>
            <label for="">Created at</label><br />
            <input
              class="input day_input"
              type="date"
              v-model="created_at"
              :class="{ errorInput: isErrors.created_at }"
              @focus="isErrors.created_at = false"
            />
            <br />
            <p class="text-danger text_err m-0" v-show="isErrors.created_at">
              {{ errors.created_at }}
            </p>
            <label for="">Updated at</label><br />
            <input
              class="input day_input"
              type="date"
              v-model="updated_at"
              :class="{ errorInput: isErrors.updated_at }"
              @focus="isErrors.updated_at = false"
            />
            <br />
            <p class="text-danger text_err m-0" v-show="isErrors.updated_at">
              {{ errors.updated_at }}
            </p>
          </div>
        </div>
        <div class="d-flex justify-content-end">
          <button
            @click="show = false"
            class="btn btn-sm btn-light btn_back m-2"
          >
            <font-awesome-icon icon="fa-arrow-left" />
            Back
          </button>
          <button
            type="submit"
            @click="addNew()"
            class="btn btn-sm btn-primary m-2"
          >
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
        <tr v-for="(item, i) in filter" :key="i" class="">
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
    return {
      isErrors: {
        id: false,
        name: false,
        link: false,
        description: false,
        created_at: false,
        updated_at: false,
      },
      errors: {
        id: "",
        name: "",
        link: "",
        description: "",
        created_at: "",
        updated_at: "",
      },
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
      initProductInstance: [
        {
          id: 5400,
          name: "Xe máy",
          link: "https://infotrac.gale.com/itweb",
          description: "Phân khối lớn",
          created_at: "2022-07-31",
          updated_at: "2021-07-27",
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
      ],
    };
  },
  computed: {
    filter() {
      var arr = [...this.initProductInstance];
      if (this.nameFilter !== "")
        return arr.filter((item) =>
          item.name
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/đ/g, "d")
            .replace(/Đ/g, "D")
            .includes(
              this.nameFilter
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/đ/g, "d")
                .replace(/Đ/g, "D")
            )
        );
      if (this.fromYear !== "" && this.toYear !== "")
        return arr.filter(
          (item) =>
            this.fromYear <= item.created_at && item.created_at <= this.toYear
        );
      return arr;
    },
  },

  watch: {
    show(show){
      if(show)
     this.$nextTick(() => {
        this.$refs.edit_focus.focus();
      });
    }
  },
  methods: {
    // handleCancel(){
    //   console.log("aaaaa")
    // },
    comf_delete(item) {
      // console.log("hello");
      this.del_show = true;
      this.temp_item = item;
      this.$nextTick(() => this.$refs.del_focus.focus());
    },
    focusInput() {
      this.$refs.input.focus();
    },
    funcAdd() {
      this.show = true;
      this.add = true;
      //reset input
      this.name = "";
      this.id = "";
      this.link = "";
      this.description = "";
      this.created_at = "";
      this.updated_at = "";
      (this.errors = {
        id: "",
        name: "",
        link: "",
        description: "",
        created_at: "",
        updated_at: "",
      }),
        (this.isErrors = {
          id: false,
          name: false,
          link: false,
          description: false,
          created_at: false,
          updated_at: false,
        });
      /*
        nextTick( [callback, context] )
      Defer the callback to be executed after the next DOM update cycle.
       Use it immediately after you’ve changed some data to wait for the DOM update.*/
      this.$nextTick(() => {
        this.$refs.input2.focus();
      });
    },
    addNew() {
      this.isErrors = {
        id: false,
        name: false,
        link: false,
        description: false,
        created_at: false,
        updated_at: false,
      };
      //check input
      if (!this.name) {
        this.isErrors.name = true;
        this.errors.name = "Name required.";
        this.show = true;
      }
      if (!this.id) {
        this.isErrors.id = true;
        this.errors.id = "id required.";
        this.show = true;
      }
      if (!this.link) {
        this.isErrors.link = true;
        this.errors.link = "Link required.";
        this.show = true;
      }
      if (!this.description) {
        this.isErrors.description = true;
        this.errors.description = "Age required.";
        this.show = true;
      }
      if (!this.created_at) {
        this.isErrors.created_at = true;
        this.errors.created_at = "Created at required.";
        this.show = true;
      }
      if (!this.updated_at) {
        this.isErrors.updated_at = true;
        this.errors.updated_at = "Updated at required.";
        this.show = true;
      }
      if (
        !this.updated_at ||
        !this.created_at ||
        !this.description ||
        !this.link ||
        !this.id ||
        !this.name
      ) {
        this.show = true;
        return;
      }
      //add
      if (this.add) {
        this.filter.push({
          id: this.id,
          name: this.name,
          link: this.link,
          description: this.description,
          created_at: this.created_at,
          updated_at: this.updated_at,
        });
        this.show = false;
      } else {
        this.show = true;
      }
      //edit
      if (!this.add) {
        this.errors = {
          id: "",
          name: "",
          link: "",
          description: "",
          created_at: "",
          updated_at: "",
        };
        this.isErrors = {
          id: false,
          name: false,
          link: false,
          description: false,
          created_at: false,
          updated_at: false,
        };
        this.tempItem = {
          id: this.id,
          name: this.name,
          link: this.link,
          description: this.description,
          created_at: this.created_at,
          updated_at: this.updated_at,
        };
        // console.log("edit ------", this.tempItem);
        this.filter[this.temp] = this.tempItem;
        this.show = false;
      }
      this.errors = {
        id: "",
        name: "",
        link: "",
        description: "",
        created_at: "",
        updated_at: "",
      };
    },

    deletedata(item) {
      let index = this.filter.indexOf(item);
      this.filter.splice(index, 1);
      this.del_show = false;
    },
    editItem(item, i) {
      this.isErrors = {
        id: false,
        name: false,
        link: false,
        description: false,
        created_at: false,
        updated_at: false,
      };
      this.errors = {
        id: "",
        name: "",
        link: "",
        description: "",
        created_at: "",
        updated_at: "",
      };
      this.show = true;
      this.add = false;
      this.id = item.id;
      this.name = item.name;
      this.link = item.link;
      this.description = item.description;
      this.created_at = item.created_at;
      this.updated_at = item.updated_at;
      this.temp = i;
      // console.log(i);
    },
  },
  mounted() {
    this.focusInput();
  },
};
</script>
<style scoped>
.day_input {
  width: 203px;
}
.text_err {
  font-size: 12px;
}
.form_box {
  margin: 0 auto;
}
.btn_del {
  margin-left: 5px;
}
.containbox {
  outline: none;
  right: 25%;
  top: 15%;
  background-color: #ffffff;
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
  outline: none;
  right: 35%;
  padding-bottom: 15px;
  background-color: #ffffff;
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
.del_head {
  background-color: rgb(119, 119, 255);
  color: white;
  font-weight: 500;
  padding: 5px;
}
.head_add {
  background-color: #0d6efd;
  color: white;
}
.errorInput {
  border: 1px solid red;
}
</style>
