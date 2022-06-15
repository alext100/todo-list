import axios from "axios";
import { Task } from "type";

const serverURL = process.env.NEXT_PUBLIC_SERVER_URL_MOCKEND as string;
const authUserURL = process.env.NEXT_PUBLIC_AUTH_USER_URL_LOCAL as string;
/* const serverURL = process.env.NEXT_PUBLIC_SERVER_URL_LOCAL as string; */

const getTasks = async () => {
  const response = await axios.get(serverURL);

  return response.data;
};

const getUser = async () => {
  const response = await axios.get(authUserURL);

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

export { getTasks, createNewTask, deleteTask, updateTask, getUser };
