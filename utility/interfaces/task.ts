export interface Task {
  id: string;
  taskName: string;
  taskDescription: string;
  date: string;
  state: "ToDo" | "InProgress" | "Done";
}
