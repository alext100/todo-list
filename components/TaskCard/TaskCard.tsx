import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/Update";
import {
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import * as React from "react";
import { updateTask } from "services/services";
import { Task } from "utility/interfaces/task";
import CardActionsSelect from "./CardActionsSelect";

type TasksCardProps = {
  // eslint-disable-next-line no-unused-vars
  onDelete: (arg0: string) => void;
  task: Task;
};

const TaskCard: React.FC<TasksCardProps> = ({ task, onDelete }) => {
  const [state, setState] = React.useState<Task["state"]>(task.state);

  const onUpdate = (taskToUpdate: Task) => {
    updateTask(taskToUpdate);
  };

  return (
    <Card sx={{ minWidth: 300 }}>
      <CardHeader title={task?.taskName} subheader={task?.date} />
      <CardContent>
        <Typography variant="body2">{task?.taskDescription}</Typography>
      </CardContent>
      <CardActions>
        <CardActionsSelect task={task} state={state} setState={setState} />
        <ButtonGroup
          aria-label="button group for update and delete task"
          sx={{ position: "relative", top: 10, left: 40 }}
        >
          <IconButton
            aria-label="delete"
            size="large"
            onClick={() => onDelete(task.id)}
          >
            <Tooltip title="Delete task">
              <DeleteIcon fontSize="inherit" />
            </Tooltip>
          </IconButton>
          <IconButton
            aria-label="update"
            size="large"
            onClick={() => onUpdate(task)}
          >
            <Tooltip title="Update task">
              <UpdateIcon fontSize="inherit" />
            </Tooltip>
          </IconButton>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
};
export default TaskCard;
