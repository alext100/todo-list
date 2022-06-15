/* eslint-disable no-unused-vars */
export interface Task {
  id: string;
  taskName: string;
  taskDescription: string;
  date: string;
  state: "ToDo" | "InProgress" | "Done";
}

export type TasksContainerProps = {
  setUserTasks: (arg0: Task[]) => void;
  tasks: Task[];
  stateToShow: Task["state"];
};

export type CreateTaskProps = {
  setUserTasks: (arg0: Task[]) => void;
  tasks: Task[];
};

export type TasksCardProps = {
  onDelete: (arg0: string) => void;
  task: Task;
  setUserTasks: (arg0: Task[]) => void;
  tasks: Task[];
};

export type CardActionsSelectProps = {
  setState: (arg0: Task["state"]) => void;
  task: Task;
  state: Task["state"];
  setUserTasks: (arg0: Task[]) => void;
  tasks: Task[];
};

export type HomePageProps = {
  tasks: Task[];
};

export type UpdateTaskDialogProps = {
  task: Task;
  setUserTasks: (arg0: Task[]) => void;
  tasks: Task[];
};

export interface IAction {
  type: string;
  user?: Object;
  tasks?: Task[];
  task: Task;
  id?: string;
}
