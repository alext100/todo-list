import AddTaskIcon from "@mui/icons-material/AddTask";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  TextField,
} from "@mui/material";
import axios from "axios";
import * as React from "react";

type Task = {
  taskName: string;
  taskDescription: string;
};

const CreateTask = () => {
  const initialTask: Task = {
    taskName: "",
    taskDescription: "",
  };
  const [task, setTask] = React.useState<Task>(initialTask);

  const handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask({
      ...task,
      [event.target.id]: event.target.value,
    });
  };

  const resetForm = () => {
    setTask(initialTask);
  };

  const createNewTask = async (newTask: Task) => {
    await axios.post("", newTask, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const createTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createNewTask(task);
    resetForm();
  };

  return (
    <Card sx={{ minWidth: 300 }}>
      <CardHeader title="Create new task" />
      <CardContent>
        <Box
          component="form"
          data-testid="create-task-form"
          onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
            createTask(event)
          }
          sx={{
            "& > :not(style)": { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <Box>
            <TextField
              id="taskName"
              label="Task name"
              variant="filled"
              fullWidth
              sx={{ marginBottom: 3 }}
              value={task.taskName}
              onChange={handleTaskChange}
            />
          </Box>
          <Box>
            <TextField
              id="taskDescription"
              label="Task description"
              placeholder="Task description"
              multiline
              fullWidth
              variant="filled"
              rows={6}
              value={task.taskDescription}
              onChange={handleTaskChange}
              data-testid="task-description"
            />
          </Box>
          <CardActions sx={{ justifyContent: "center" }}>
            <Button
              type={"submit"}
              variant="contained"
              endIcon={<AddTaskIcon />}
            >
              Add to Tasks
            </Button>
          </CardActions>
        </Box>
      </CardContent>
    </Card>
  );
};
export default CreateTask;
