import { generateTaskCode } from "@/lib/utils";
import { StatusCode, Task } from "@/types";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface TaskState {
  tasks: Task[];
  addTask: (task: Task) => void;
  removeTask: (code: string) => void;
  updateTask: (updatedTask: Task) => void;
  filterTasks: (statusCode: StatusCode) => Task[];
  updateStatus: (statusCode: StatusCode, taskCode: string) => void;
  generateTaskCode: () => string;
  taskDrawer: {
    visible: boolean;
    record: Task | undefined;
  };
  manageDrawer: (visible: boolean, record?: Task) => void;
  updateTaskField: (code: string, key: keyof Task, value: any) => void;
}

export const useTaskStore = create<TaskState>()(
  persist(
    (set, get) => ({
      tasks: [
        {
          index: 1,
          code: "TASK-001",
          statusCode: "TODO" as StatusCode,
          title: "Create project structure",
          description:
            "Setup the initial structure for the project repository.",
          date: "2024-12-01",
          assignee: null,
          priority: "High",
        },
        {
          index: 2,
          code: "TASK-002",
          statusCode: "IN_PROGRESS" as StatusCode,
          title: "Develop user login API",
          description: "Build the API for user login and authentication.",
          date: "2024-12-02",
          assignee: {
            name: "Jane Smith",
            avatarUrl: "https://randomuser.me/api/portraits/women/1.jpg",
            email: "janesmith@example.com",
          },
          priority: "Medium",
        },
      ] as Task[],
      addTask: (task) =>
        set((state) => {
          return { tasks: [...state.tasks, task] };
        }),
      removeTask: (code) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.code !== code),
        })),
      updateTask: (updatedTask) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.code === updatedTask.code ? { ...task, ...updatedTask } : task
          ),
        })),
      filterTasks: (statusCode) => {
        const tasks = get().tasks;
        const filtered = tasks.filter((task) => task.statusCode === statusCode);
        return filtered;
      },
      updateStatus: (statusCode, taskCode) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.code === taskCode ? { ...task, statusCode: statusCode } : task
          ),
          taskDrawer:
            state.taskDrawer.visible &&
            taskCode === state.taskDrawer.record?.code
              ? {
                  ...state.taskDrawer,
                  record: {
                    ...state.taskDrawer.record,
                    statusCode: statusCode,
                  },
                }
              : state.taskDrawer,
        })),
      generateTaskCode: () => {
        const tasks = get().tasks;
        const lastCode = tasks[tasks.length - 1].code;
        const newCode = generateTaskCode(lastCode);
        return newCode;
      },
      taskDrawer: {
        visible: false,
        record: undefined,
      },
      manageDrawer: (visible, record) =>
        set((state) => ({
          taskDrawer: { ...state.taskDrawer, visible, record },
        })),
      updateTaskField: (code, key, value) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.code === code ? { ...task, [key]: value } : task
          ),
          taskDrawer:
            state.taskDrawer.visible && code === state.taskDrawer.record?.code
              ? {
                  ...state.taskDrawer,
                  record: {
                    ...state.taskDrawer.record,
                    [key]: value,
                  },
                }
              : state.taskDrawer,
        })),
    }),
    {
      name: "task-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
