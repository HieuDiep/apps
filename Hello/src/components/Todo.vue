<template>
  <div>
    <h1>TODO APP</h1>
    <input v-model="newtodo" placeholder="Thêm việc cần làm" />
    <br />
    <input v-model="newdes" placeholder="Mô tả" /> <br />
    <input type="checkbox" v-model="newtodo3" />
    <button @click="AddNewTodo">Add</button>
    <ul>
      <li v-for="todo in todos" :key="todo.title">
        <h3>
          {{ todo.title }}
        </h3>
        <h5>
          {{ todo.description }}
        </h5>
        {{ todo.done }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newtodo: "",
      test: "hieu",
      todos: [],
      newtodo3: false,
    };
  },
  methods: {
    AddNewTodo: function () {
      console.log("hello");
      if (this.newtodo != "") {
        this.todos.push({
          title: this.newtodo,
          description: this.newdes,
          done: this.newtodo3,
        });
      }
    },
  },
};
</script>
<style scoped></style>
