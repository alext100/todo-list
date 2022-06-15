import CardActionsSelect from "@/components/TaskCard/CardActionsSelect";
import UpdateTaskDialog from "@/components/UpdateTaskDialog/UpdateTaskDialog";
import DeleteIcon from "@mui/icons-material/Delete";
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
import { TasksCardProps } from "type";
import { Task } from "utility/interfaces/task";

const TaskCard: React.FC<TasksCardProps> = ({
  task,
  onDelete,
  setUserTasks,
  tasks,
}) => {
  const [state, setState] = React.useState<Task["state"]>(task.state);

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
          <UpdateTaskDialog
            task={task}
            setUserTasks={setUserTasks}
            tasks={tasks}
          />
        </ButtonGroup>
      </CardActions>
    </Card>
  );
};
export default TaskCard;
