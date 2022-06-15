/* eslint-disable no-unused-vars */
import { Task } from "utility/interfaces/task";

export type TasksContainerProps = {
  setUserTasks: (arg0: Task[]) => void;
  tasks: Task[];
};

export type CreateTaskProps = {
  setUserTasks: (arg0: Task[]) => void;
  tasks: Task[];
};

export type TasksCardProps = {
  onDelete: (arg0: string) => void;
  task: Task;
};

export type CardActionsSelectProps = {
  setState: (arg0: Task["state"]) => void;
  task: Task;
  state: Task["state"];
};

export type HomePageProps = {
  tasks: Task[];
};
