import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import * as React from "react";
import CardActionsSelect from "./CardActionsSelect";

const TaskCard = () => (
  /*  */
  <Card sx={{ minWidth: 300 }}>
    <CardHeader title="Task name" subheader="Created 14.06.2022" />
    <CardContent>
      <Typography variant="body2">Task description</Typography>
    </CardContent>
    <CardActions>
      <CardActionsSelect />
    </CardActions>
  </Card>
);
export default TaskCard;
