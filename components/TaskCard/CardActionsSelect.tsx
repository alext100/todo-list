import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Tooltip,
} from "@mui/material";
import * as React from "react";

const CardActionsSelect = () => {
  const [state, setState] = React.useState<string>("ToDo");

  const handleChange = (event: SelectChangeEvent<typeof state>) => {
    setState(event.target.value || "ToDo");
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
