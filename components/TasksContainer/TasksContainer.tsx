import TaskCard from "@/components/TaskCard/TaskCard";
import { Checkbox, List, ListItem, Tooltip } from "@mui/material";
import useTasks from "hooks/useTasks";
import * as React from "react";
import { Task, TasksContainerProps } from "type";

const TasksContainer: React.FC<TasksContainerProps> = ({
  tasks = [],
  setUserTasks,
  stateToShow,
}) => {
  const { deleteTask } = useTasks();
  const [checked, setChecked] = React.useState<Task[]>([]);

  const onDelete = (id: string) => {
    deleteTask(id);
    const newTaskList = tasks.filter((task: Task) => task.id !== id);
    setUserTasks(newTaskList);
  };

  const handleToggle = (value: Task) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List
      dense
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        display: "flex",
        flexDirection: "column-reverse",
      }}
    >
      {tasks.map((task: Task) => {
        if (task.state === stateToShow) {
          const labelId = `checkbox-task-list-label-${task.taskName}`;
          return (
            <ListItem
              key={task.id}
              secondaryAction={
                <Tooltip title="Choose task">
                  <Checkbox
                    edge="end"
                    onChange={handleToggle(task)}
                    checked={checked.indexOf(task) !== -1}
                    inputProps={{
                      "aria-labelledby": labelId,
                      "aria-label": `Checkbox for ${task.taskName} task`,
                    }}
                    sx={{
                      right: "50px",
                      top: "-80px",
                    }}
                  />
                </Tooltip>
              }
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
