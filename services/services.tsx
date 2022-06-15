import axios from "axios";

/* const serverURL = process.env.NEXT_PUBLIC_SERVER_URL_MOCKEND as string; */
const authUserURL = process.env.NEXT_PUBLIC_AUTH_USER_URL_LOCAL as string;
const serverURL = process.env.NEXT_PUBLIC_SERVER_URL_LOCAL as string;

const getTasks = async () => {
  const response = await axios.get(serverURL);

  return response.data;
};

const getUser = async () => {
  const response = await axios.get(authUserURL);

  return response.data;
};

export { getTasks, getUser };
