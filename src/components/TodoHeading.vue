<script setup>
import { inject, computed } from "vue";

const { tasks } = inject("tasks");
const date = new Date();
const options = {
  weekday: "short",
  month: "long",
  day: "numeric",
  year: "numeric",
};
const formattedDate = date.toLocaleDateString("en-US", options);
const tasksWordText = computed(() => {
  let text = "";
  switch (tasks.value.length) {
    case 1:
      text = "task";
      break;
    default:
      text = "tasks";
  }
  return text;
});
</script>

<template>
  <header class="header">
    <div class="headerInfo">
      <span class="headerDate">{{ formattedDate }}</span>
      <span class="headerTasks">{{ tasks.length }} {{ tasksWordText }}</span>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  background: linear-gradient(
      to bottom,
      var(--color-accent),
      var(--color-accent)
    )
    no-repeat;
  font-size: var(--font-secondary);
  font-size: 2rem;
  background-size: 100% 100%;
  background-position: center;
  clip-path: circle(200% at 50% -550%);

  &Info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
