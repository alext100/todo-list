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
import { useSnackbar } from "notistack";
import * as React from "react";
import { createNewTask } from "services/services";
import { CreateTaskProps } from "type";
import { Task } from "utility/interfaces/task";
import { v4 as uuidv4 } from "uuid";

const CreateTask: React.FC<CreateTaskProps> = ({
  tasks = [],
  setUserTasks,
}) => {
  const initialTask: Task = {
    id: "",
    taskName: "",
    taskDescription: "",
    date: "",
    state: "ToDo",
  };
  const [task, setTask] = React.useState<Task>(initialTask);
  const [validationError, setValidationError] = React.useState<boolean>(false);
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = () => {
    enqueueSnackbar("New task was added!", {
      variant: "success",
    });
  };

  const handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask({
      ...task,
      [event.target.id]: event.target.value,
      id: uuidv4(),
    });
  };

  const resetForm = () => {
    setTask(initialTask);
  };

  const createTask = (event: React.FormEvent<HTMLFormElement>) => {
    if (task.taskName !== "" && task.taskDescription !== "") {
      event.preventDefault();
      createNewTask(task);
      resetForm();
      setUserTasks([...tasks, task]);
    } else {
      setValidationError(true);
    }
  };

  return (
    <Card sx={{ minWidth: 300, border: "1px solid #b0fbf4", boxShadow: 3 }}>
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
              error={validationError}
              helperText={validationError ? <p>Type something</p> : null}
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
              rows={4}
              value={task.taskDescription}
              onChange={handleTaskChange}
              data-testid="task-description"
              error={validationError}
              helperText={validationError ? <p>Type something</p> : null}
            />
          </Box>
          <CardActions sx={{ justifyContent: "center" }}>
            <Button
              onClick={handleClick}
              type={"submit"}
              variant="contained"
              endIcon={<AddTaskIcon />}
              disabled={!task.taskName || !task.taskDescription}
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
