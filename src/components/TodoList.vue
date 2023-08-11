<script setup>
import { inject } from "vue";
import TodoItem from "./TodoItem.vue";

const { tasks } = inject("tasks");
</script>

<template>
  <ul class="todoList">
    <todo-item v-for="task in tasks" :key="task.id" :task="task"></todo-item>
  </ul>
</template>

<style lang="scss" scoped>
.todoList {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
</style>
