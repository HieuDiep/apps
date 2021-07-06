<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Todo />
  </div>
</template>

<script>
// @ is an alias to /src
import Todo from "@/components/Todo.vue";

export default {
  name: "Home",
  components: {
    Todo,
  },
  data() {
    return {
      todos: [
        {
          title: "todo A",
        },
        {
          title: "todo B",
        },
      ],
    };
  },
};
</script>
