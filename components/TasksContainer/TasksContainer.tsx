import TaskCard from "@/components/TaskCard/TaskCard";
import { List, ListItem } from "@mui/material";
import * as React from "react";
import { deleteTask } from "services/services";
import { Task, TasksContainerProps } from "type";

const TasksContainer: React.FC<TasksContainerProps> = ({
  tasks = [],
  setUserTasks,
  stateToShow,
}) => {
  const onDelete = (id: string) => {
    deleteTask(id);
    const newTaskList = tasks.filter((task: Task) => task.id !== id);
    setUserTasks(newTaskList);
  };

  return (
    <List
      dense
      sx={{
        width: "100%",
        minWidth: 380,
        bgcolor: "background.paper",
        display: "flex",
        flexDirection: "column-reverse",
        justifyContent: "center",
      }}
    >
      {tasks.map((task: Task) => {
        if (task.state === stateToShow) {
          return (
            <ListItem
              key={task.id}
              sx={{ padding: 0, justifyContent: "center" }}
            >
              <TaskCard
                task={task}
                onDelete={onDelete}
                tasks={tasks}
                setUserTasks={setUserTasks}
              />
            </ListItem>
          );
        }
        return null;
      })}
    </List>
  );
};

export default TasksContainer;
