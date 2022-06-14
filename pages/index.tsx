import CreateTask from "@/components/CreateTask/CreateTask";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import TasksContainer from "@/components/TasksContainer/TasksContainer";
import styles from "@/styles/Home.module.css";
import { Divider } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { getTasks } from "services/services";

const Home: NextPage = ({ allTasks }: any) => {
  const [tasks, setTasks] = useState(allTasks);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <Head>
          <title>Task List</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <CreateTask />
          <Divider />
          <TasksContainer tasks={tasks} />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const newTasks = getTasks();

  return {
    props: {
      allTasks: await newTasks,
    },
  };
};
