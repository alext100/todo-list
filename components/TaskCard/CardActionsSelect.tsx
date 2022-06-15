import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Tooltip,
} from "@mui/material";
import * as React from "react";
import { updateTask } from "services/services";
import { CardActionsSelectProps } from "type";
import { Task } from "utility/interfaces/task";

const CardActionsSelect: React.FC<CardActionsSelectProps> = ({
  state,
  setState,
  task,
}) => {
  const handleChange = (event: SelectChangeEvent<typeof state>) => {
    setState(event.target.value as Task["state"]);
    updateTask({ ...task, state: event.target.value as Task["state"] });
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
          <MenuItem value={"InProgress"}>InProgress</MenuItem>
          <MenuItem value={"Done"}>Done</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default CardActionsSelect;
