<script setup>
import { ref, inject } from "vue";
import CustomButton from "./CustomButton.vue";
const { addTask } = inject("tasks");
const taskText = ref("");
const clickHandler = () => {
  if (taskText.value) {
    addTask(taskText.value);
    taskText.value = "";
  }
};
</script>

<template>
  <form class="todoAdd">
    <input
      type="text"
      v-model="taskText"
      class="todoAddInput"
      placeholder="Place next task"
    />
    <custom-button type="submit" class="todoAddBtn" @clickHandler="clickHandler"
      >+</custom-button
    >
  </form>
</template>

<style lang="scss" scoped>
.todoAdd {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  &Input {
    width: 70%;
    height: 3rem;
    border: none;
    font-size: 2rem;
    padding: 0 5px;
    &:focus {
      outline: none;
    }
  }

  &Btn {
    width: 5rem;
    height: 5rem;
    border: none;
    border-radius: 50%;
    background-color: var(--color-accent);
    color: var(--color-white);
    font-size: 3.5rem;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>
