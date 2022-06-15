import axios from "axios";
import { Task } from "type";

const serverURL = "http://localhost:3010/tasks";

const getTasks = async () => {
  const response = await axios.get(serverURL);

  return response.data;
};

const createNewTask = async (newTask: Task) => {
  await axios({
    url: serverURL,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: { ...newTask, state: "ToDo" },
  });
};

const deleteTask = async (id: string) => {
  await axios({
    url: `${serverURL}/${id}`,
    method: "DELETE",
  });
};

const updateTask = async (task: Task) => {
  await axios({
    url: `${serverURL}/${task.id}`,
    method: "PUT",
    data: task,
  });
};

export { getTasks, createNewTask, deleteTask, updateTask };
