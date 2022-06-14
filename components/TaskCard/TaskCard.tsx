import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import * as React from "react";
import { Task } from "utility/interfaces/task";
import CardActionsSelect from "./CardActionsSelect";

type TasksCardProps = {
  task: Task;
};

const TaskCard: React.FC<TasksCardProps> = ({ task }) => (
  <Card sx={{ minWidth: 300 }}>
    <CardHeader title={task?.taskName} subheader={task?.date} />
    <CardContent>
      <Typography variant="body2">{task?.taskDescription}</Typography>
    </CardContent>
    <CardActions>
      <CardActionsSelect />
    </CardActions>
  </Card>
);
export default TaskCard;
