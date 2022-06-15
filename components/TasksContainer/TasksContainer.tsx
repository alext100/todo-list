import TaskCard from "@/components/TaskCard/TaskCard";
import { Checkbox, List, ListItem, Tooltip } from "@mui/material";
import * as React from "react";
import { deleteTask } from "services/services";
import { TasksContainerProps } from "type";
import { Task } from "utility/interfaces/task";

const TasksContainer: React.FC<TasksContainerProps> = ({
  tasks = [],
  setUserTasks,
}) => {
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
        const labelId = `checkbox-list-secondary-label-${task.taskName}`;
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
      })}
    </List>
  );
};

export default TasksContainer;
