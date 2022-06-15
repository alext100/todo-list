import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Tooltip,
} from "@mui/material";
import { useSnackbar } from "notistack";
import * as React from "react";
import { updateTask } from "services/services";
import { CardActionsSelectProps, Task } from "type";

const CardActionsSelect: React.FC<CardActionsSelectProps> = ({
  state,
  setState,
  task,
}) => {
  const { enqueueSnackbar } = useSnackbar();

  const handleChange = (event: SelectChangeEvent<typeof state>) => {
    setState(event.target.value as Task["state"]);
    updateTask({ ...task, state: event.target.value as Task["state"] });
    enqueueSnackbar(`Task state was changed to ${event.target.value}`, {
      variant: "success",
    });
  };

  return (
    <>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <Tooltip title="Change task status">
          <InputLabel id="task-status">Status</InputLabel>
        </Tooltip>
        <Select
          labelId="task-status"
          id="select-task-status"
          value={state}
          onChange={handleChange}
          label="Status"
        >
          <MenuItem value={"ToDo"}>ToDo</MenuItem>
          <MenuItem value={"InProgress"}>In Progress</MenuItem>
          <MenuItem value={"Done"}>Done</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default CardActionsSelect;
