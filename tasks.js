import { ref, onMounted, onUnmounted } from "vue";

export function useTasks() {
  const tasks = ref([]);

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 999999);
    tasks.value.push({ id, text: task, completed: false });
    localStorage.setItem("my-todo-list", JSON.stringify(tasks.value));
  };

  const removeTask = (taskId) => {
    tasks.value = tasks.value.filter((task) => task.id !== taskId);
    localStorage.setItem("my-todo-list", JSON.stringify(tasks.value));
  };

  const editTask = (taskId, propertyName, propertyValue = false) => {
    const index = tasks.value.findIndex((task) => task.id === taskId);
    if (propertyName === "completed") {
      tasks.value[index].completed = !tasks.value[index].completed;
    } else if (propertyName === "text" && propertyValue) {
      tasks.value[index].text = propertyValue;
    } else {
      throw new Error("Invalid arguments.");
    }
    localStorage.setItem("my-todo-list", JSON.stringify(tasks.value));
  };

  onMounted(() => {
    const currentTasks = JSON.parse(localStorage.getItem("my-todo-list"));
    if (currentTasks) {
      tasks.value = currentTasks;
    }
  });

  return { tasks, addTask, removeTask, editTask };
}
