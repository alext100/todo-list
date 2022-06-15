import Transition from "@/components/Transitions/Transition";
import UpdateIcon from "@mui/icons-material/Update";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Tooltip,
} from "@mui/material";
import { useSnackbar } from "notistack";
import * as React from "react";
import { updateTask } from "services/services";
import { Task, UpdateTaskDialogProps } from "type";
import updateAllTasks from "utility/updateAllTasks";

const UpdateTaskDialog: React.FC<UpdateTaskDialogProps> = ({
  task,
  tasks = [],
  setUserTasks,
}) => {
  const [open, setOpen] = React.useState(false);
  const [updatedTask, setUpdatedTask] = React.useState<Task>(task);

  const { enqueueSnackbar } = useSnackbar();

  const onUpdate = (taskToUpdate: Task) => {
    updateTask(taskToUpdate);
    enqueueSnackbar("Task was successfully updated", {
      variant: "success",
    });
  };

  const handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedTask({
      ...updatedTask,
      [event.target.id]: event.target.value,
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    setOpen(false);
    onUpdate(updatedTask);

    setUserTasks(updateAllTasks(tasks, updatedTask));
  };

  return (
    <div>
      <IconButton aria-label="update" size="large" onClick={handleClickOpen}>
        <Tooltip title="Update task">
          <UpdateIcon fontSize="inherit" />
        </Tooltip>
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-describedby="update-task-dialog"
        TransitionComponent={Transition}
        keepMounted
      >
        <DialogTitle>Update task</DialogTitle>
        <DialogContent>
          <TextField
            id="taskName"
            autoFocus
            label="Task name"
            variant="standard"
            fullWidth
            sx={{ marginBottom: 3 }}
            value={updatedTask.taskName}
            onChange={handleTaskChange}
          />
          <TextField
            id="taskDescription"
            label="Task description"
            placeholder="Task description"
            multiline
            fullWidth
            variant="standard"
            rows={3}
            value={updatedTask.taskDescription}
            onChange={handleTaskChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UpdateTaskDialog;
