<script setup>
import TodoHeading from "./components/TodoHeading.vue";
import TodoAdd from "./components/TodoAdd.vue";
import TodoList from "./components/TodoList.vue";
import { provide } from "vue";
import { useTasks } from "../tasks";

const { tasks, addTask, removeTask, editTask } = useTasks();

provide("tasks", {
  tasks,
  addTask,
  removeTask,
  editTask,
});
</script>

<template>
  <main class="app">
    <div class="todo">
      <todo-heading></todo-heading>
      <todo-add></todo-add>
      <todo-list></todo-list>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.app {
  min-height: calc(100vh - 5rem);
  background-color: var(--color-accent);
  padding-top: 5rem;
}

.todo {
  margin: 0 auto;
  background-color: var(--color-white);
  width: 350px;
  padding-bottom: 2rem;
  box-shadow: var(--shadow-white);
  border-radius: 5px;
}
</style>
