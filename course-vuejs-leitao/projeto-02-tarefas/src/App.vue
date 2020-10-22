<template>
  <div id="app">
    <h1>Tarefas</h1>
    <TaskProgress :progress="progress" />
    <NewTask @task-added="addTask" />
    <TaskGrid
      :tasks="tasks"
      @task-deleted="deleteTask"
      @task-state-changed="toggleTask"
    />
  </div>
</template>

<script>
import TaskGrid from "./components/TaskGrid.vue";
import NewTask from "./components/NewTask.vue";
import TaskProgress from "./components/TaskProgress.vue";

export default {
  components: {
    TaskGrid,
    NewTask,
    TaskProgress,
  },
  computed: {
    progress() {
      const total = this.tasks.length;
      const done = this.tasks.filter((t) => !t.pending).length;
      return Math.round((done / total) * 100) || 0;
    },
  },
  data() {
    return {
      tasks: [
        { name: "Lavar a louça", pending: false },
        { name: "Comprar blusa", pending: true },
      ],
    };
  },
  watch: {
    tasks: {
      deep: true,
      handler() {
        localStorage.setItem("tasks", JSON.stringify(this.tasks))
      },
    },
  },
  methods: {
    addTask(task) {
      const reallyNew = !this.tasks.some((t) => t.name === task.name);
      reallyNew &&
        this.tasks.push({
          name: task.name,
          pending: task.pending || true,
        });
    },
    deleteTask(i) {
      this.tasks.splice(i, 1);
    },
    toggleTask(i) {
      this.tasks[i].pending = !this.tasks[i].pending;
    },
  },
  created() {
    const json = localStorage.getItem("tasks");
    this.tasks = JSON.parse(json) || [];
  },
};
</script>

<style>
body {
  font-family: "Lato", sans-serif;
  background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
  color: #fff;
}

#app {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

#app h1 {
  margin-bottom: 5px;
  font-weight: 300;
  font-size: 3rem;
}
</style>
