<script setup>
import CustomButton from "./CustomButton.vue";
import CustomIcon from "./CustomIcon.vue";
import { inject, computed, ref, watch } from "vue";

const props = defineProps({
  task: Object,
});
const { editTask, removeTask } = inject("tasks");
const isEdit = ref(false);
const taskText = ref(props.task.text);
const completed = computed(() => props.task.completed);
const intVal = ref(null);

watch(props.task, (newTask) => {
  if (newTask.completed) {
    intVal.value = setTimeout(() => {
      removeTask(props.task.id);
    }, 5000);
  } else {
    clearInterval(intVal.value);
  }
});

const toggleEditMode = () => {
  isEdit.value = !isEdit.value;
};
const editHandler = () => {
  if (taskText.value) {
    editTask(props.task.id, "text", taskText.value);
  }
  toggleEditMode();
};
</script>

<template>
  <li class="todoItem">
    <div v-if="!isEdit">
      <span
        class="todoItemChecked"
        :class="{ todoItemCheckedActive: completed }"
        @click="editTask(props.task.id, 'completed')"
      >
        <custom-icon v-if="completed" type="check"></custom-icon>
      </span>
      <span
        class="todoItemText"
        :class="{ todoItemTextActive: completed }"
        @click="editTask(props.task.id, 'completed')"
        >{{
          props.task.text.length > 20
            ? props.task.text.slice(0, 20) + "..."
            : props.task.text
        }}</span
      >
    </div>
    <input v-if="isEdit" type="text" v-model="taskText" class="todoItemInput" />
    <custom-button
      v-if="!isEdit"
      class="todoItemBtn"
      @clickHandler="toggleEditMode"
      >Edit</custom-button
    >
    <custom-button v-if="isEdit" class="todoItemBtn" @clickHandler="editHandler"
      >Ok</custom-button
    >
  </li>
</template>

<style lang="scss" scoped>
.todoItem {
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & div {
    display: flex;
    align-items: center;
  }

  &Checked {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    border: 2px solid var(--color-gray);
    border-radius: 50%;
    cursor: pointer;
  }

  &CheckedActive {
    border: 2px solid var(--color-accent-second);
  }

  &Text {
    font-size: 1.6rem;
    margin-left: 1rem;
    cursor: pointer;
  }

  &TextActive {
    text-decoration: line-through;
    color: var(--color-gray);
  }

  &Btn {
    border: none;
    border-radius: 5px;
    padding: 2px 5px;
    color: var(--color-white);
    background-color: var(--color-accent);
    letter-spacing: 2px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  }

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
}
</style>
