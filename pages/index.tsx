import CreateTask from "@/components/CreateTask/CreateTask";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import NotLoggedInUserView from "@/components/NotLoggedInUserView/NotLoggedInUserView";
import TasksContainer from "@/components/TasksContainer/TasksContainer";
import styles from "@/styles/Home.module.css";
import { useUser } from "@auth0/nextjs-auth0";
import { Box, Container, Grid, Typography } from "@mui/material";
import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { HomePageProps } from "type";

const Home: NextPage<HomePageProps> = ({ tasks }) => {
  const { user } = useUser();
  const [userTasks, setUserTasks] = useState(tasks);

  return (
    <>
      <Header />
      {!user && (
        <>
          <NotLoggedInUserView />{" "}
          <Container className={styles.footerNotLogged}>
            <Footer />;
          </Container>
        </>
      )}
      {user && (
        <>
          <div className={styles.container}>
            <Head>
              <title>Task List</title>
              <meta name="description" content="Generated by create next app" />
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
              <CreateTask tasks={userTasks} setUserTasks={setUserTasks} />
              <Grid container className={styles.grid}>
                <Grid
                  item
                  sx={{
                    p: 2,
                    border: "1px dashed grey",
                    minHeight: "fit-content",
                  }}
                >
                  <Typography variant="h5">To Do</Typography>
                  <TasksContainer
                    tasks={userTasks}
                    setUserTasks={setUserTasks}
                    stateToShow="ToDo"
                  />
                </Grid>
                <Grid
                  item
                  sx={{
                    p: 2,
                    border: "1px dashed grey",
                    minHeight: "fit-content",
                  }}
                >
                  <Typography variant="h5">In Progress</Typography>
                  <TasksContainer
                    tasks={userTasks}
                    setUserTasks={setUserTasks}
                    stateToShow="InProgress"
                  />
                </Grid>
                <Grid
                  item
                  sx={{
                    p: 2,
                    border: "1px dashed grey",
                    minHeight: "fit-content",
                  }}
                >
                  <Typography variant="h5">Done</Typography>
                  <TasksContainer
                    tasks={userTasks}
                    setUserTasks={setUserTasks}
                    stateToShow="Done"
                  />{" "}
                </Grid>
              </Grid>
              <Box sx={{ display: "flex" }}></Box>
            </main>
          </div>
          <Container>
            <Footer />;
          </Container>
        </>
      )}
    </>
  );
};
export default Home;

export const getStaticProps = async () => {
  const authUserURL = process.env.NEXT_PUBLIC_AUTH_USER_URL_LOCAL as string;
  const response = await axios.get(authUserURL);
  const newTasks = await response.data;

  return {
    props: {
      tasks: await newTasks,
    },
  };
};
