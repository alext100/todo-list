export interface Task {
  id: number;
  name: string;
  description: string;
  date: string;
  state: "ToDo" | "InProgress" | "Done";
}
