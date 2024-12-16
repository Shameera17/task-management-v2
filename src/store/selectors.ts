import { useTaskStore } from "./taskStore";

export const useTaskActions = () => ({
  tasks: useTaskStore((state) => state.tasks),
  addTask: useTaskStore((state) => state.addTask),
  removeTask: useTaskStore((state) => state.removeTask),
  updateStatus: useTaskStore((state) => state.updateStatus),
  filterTasks: useTaskStore((state) => state.filterTasks),
  generateTaskCode: useTaskStore((state) => state.generateTaskCode),
  taskDrawer: useTaskStore((state) => state.taskDrawer),
  manageDrawer: useTaskStore((state) => state.manageDrawer),
  updateTask: useTaskStore((state) => state.updateTask),
  updateTaskField: useTaskStore((state) => state.updateTaskField),
});
