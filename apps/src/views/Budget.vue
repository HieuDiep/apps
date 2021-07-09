<template>
  <div class="container-fluid contain">
    <div class="container_width">
      <h1 class="pre-color">Available Budget in : {{ today }}</h1>
      <div class="pre-color2">
        {{ sum }}
      </div>
      <form action="" class="formcolor">
        <select
          class="money_input"
          :class="{ money_expenses: !monney_status }"
          v-model="monney_status"
          @change="(e) => handleChange(e)"
        >
          <option :value="true">+</option>
          <option :value="false">-</option>
        </select>
        <input
          type="text"
          class="money_input"
          placeholder="Add your description here"
          :class="{ money_expenses: !monney_status }"
          v-model="description"
        />
        <input
          type="text"
          class="money_input"
          placeholder="$ Amount of money $"
          :class="{ money_expenses: !monney_status }"
          v-model="amount_money"
        />
        <button
          class="money_input btn"
          :class="{ money_expenses: !monney_status }"
          type="submit"
          @click="handleAdd"
        >
          ADD
        </button>
      </form>
      <div class="monney_list">
        <div class="monney-l">
          <div class="monney_list-income">
            <div class="monney_list-heading">INCOME</div>
            <div class="income_item">
              <ul class="income_item_ul">
                <li v-for="(index, i) in income" :key="i">
                  {{ index.des }} +{{ index.monney }}
                  <button class="btn_del" @click="deletetodo(index, income)">
                    <font-awesome-icon icon="times-circle" />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="monney-r">
          <div class="monney_list-expenses">
            <div class="monney_list-heading">
              <i class="fas fa-alarm-clock"></i>EXPENSE
            </div>
            <div class="expense_item">
              <ul class="income_item_ul">
                <li v-for="(index, i) in expenses" :key="i">
                  {{ index.des }} -{{ index.monney }}
                  <button class="btn_del2" @click="deletetodo(index, expenses)">
                    <font-awesome-icon icon="times-circle" />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sum: 0,
      description: "",
      amount_money: 0,
      monney_status: true,
      income: [],
      expenses: [],
      monney_income: 0,
      monney_expenses: 0,
    };
  },
  computed: {
    hello: function () {
      return 0;
    },
    today() {
      let date = new Date();
      let month = new Array();
      month[0] = "January";
      month[1] = "February";
      month[2] = "March";
      month[3] = "April";
      month[4] = "May";
      month[5] = "June";
      month[6] = "July";
      month[7] = "August";
      month[8] = "September";
      month[9] = "October";
      month[10] = "November";
      month[11] = "December";
      var today = month[date.getMonth()] + " " + date.getDate();
      return today;
    },
  },
  methods: {
    handleAdd() {
      let n = parseInt(this.amount_money);
      if (
        this.monney_status &&
        this.description != "" &&
        this.amount_money != 0
      ) {
        this.income.push({
          des: this.description,
          monney: this.amount_money,
        });
        this.sum = n + this.sum;
        this.amount_money = 0;
      } else if (
        !this.monney_status &&
        this.description != "" &&
        this.amount_money != 0
      ) {
        this.expenses.push({
          des: this.description,
          monney: this.amount_money,
        });
        this.sum = this.sum - n;
        this.amount_money = 0;
      }
      this.description = "";
    },
    handleChange(e) {
      console.log(Boolean(e.target.value));
      console.log(this.monney_status);
    },
    deletetodo(item, arr) {
      console.log(item);
      // console.log(this.);
      let index = arr.indexOf(item);
      arr.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.contain {
  background-image: url("../assets/bg.png");
  height: 100%;
  width: 100vw;
  min-height: 100vh;
}
.container_width {
  max-width: 1200px;
  margin: 0 auto;
}
.formcolor {
  padding: 30px;
}
.pre-color {
  padding: 10px 0 5px 0;
  color: #01c5aa;
}

.pre-color2 {
  color: #01c5aa;
  font-size: 50px;
  border: 2px solid #01c5aa;
  margin: 20px;
}
.pre-color2:hover {
  background-color: #01c5aa;
  color: whitesmoke;
  transition: 0.5s;
}
.btn {
  cursor: pointer;
}
.money_input {
  color: whitesmoke;
  background-color: #01c5aa;
  padding: 8px 15px;
  font-size: 18px;
  margin: 0 5px;
  border: 1px solid #01c5aa;
  border-radius: 4px;
  background-color: #01c5aa;
}
.money_expenses {
  color: whitesmoke;
  background-color: #da2130;
  padding: 8px 15px;
  font-size: 18px;
  margin: 0 5px;
  border: 1px solid #da2130;
  border-radius: 4px;
  background-color: #da2130;
}

.money_input::placeholder {
  color: whitesmoke;
}
.monney_list {
  display: flex;
  /* flex-direction: row; */
  flex-wrap: wrap;
  justify-content: space-around;
  color: whitesmoke;
  text-align: center;
}

.monney_list-income {
  background-color: #01c5aa;
  width: 250px;
  border-radius: 5px;
}
.monney_list-expenses {
  background-color: #da2130;
  width: 250px;
  border-radius: 5px;
}
.monney_list-heading {
  padding: 10px;
  font-weight: 500;
  font-size: 18px;
}
.income_item_ul {
  text-decoration: none;
  list-style-type: none;
  padding: 5px;
  margin: 0;
}
.income_item_ul li {
  border-top: 1px solid white;
  padding: 5px;
}
/* .income_item_ul li :hover .btn_del2{
  display: block;
} */
.btn_del {
  color: white;
  background-color: #01c5aa;
  border-radius: 15px;
  float: right;
  border: none;
  /* display: none; */
}
.btn_del2 {
  color: white;
  background-color: #da2130;
  border-radius: 15px;
  float: right;
  border: none;
  /* display: none; */
}
.btn_del:hover {
  cursor: pointer;
  transform: scale(1.2);
}
.btn_del2:hover {
  cursor: pointer;
  transform: scale(1.2);
  transition: ease-in;
  /* display: block; */
}
</style>
