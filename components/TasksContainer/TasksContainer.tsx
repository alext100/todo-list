import TaskCard from "@/components/TaskCard/TaskCard";
import { Checkbox, List, ListItem } from "@mui/material";
import * as React from "react";
import { Task } from "utility/interfaces/task";

type TasksContainerProps = {
  tasks: Task[];
};

const TasksContainer: React.FC<TasksContainerProps> = ({ tasks = [] }) => {
  const [checked, setChecked] = React.useState<Task[]>([]);

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
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
    >
      {tasks.map((task: Task) => {
        const labelId = `checkbox-list-secondary-label-${task.taskName}`;
        return (
          <ListItem
            key={task.id}
            secondaryAction={
              <Checkbox
                edge="end"
                onChange={handleToggle(task)}
                checked={checked.indexOf(task) !== -1}
                inputProps={{
                  "aria-labelledby": labelId,
                  "aria-label": `Checkbox for ${task.taskName} task`,
                }}
                sx={{ right: "50px", top: "85px" }}
              />
            }
          >
            <TaskCard task={task} />
          </ListItem>
        );
      })}
    </List>
  );
};

export default TasksContainer;
