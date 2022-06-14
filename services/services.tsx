import axios from "axios";
import { Task } from "utility/interfaces/task";

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
    data: { ...newTask, date: new Date().toLocaleString(), state: "ToDo" },
  });
};

export { getTasks, createNewTask };
