import { render, screen } from "@testing-library/react";
import { Task } from "type";
import TaskCard from "./TaskCard";

const mockEnqueue = jest.fn();
jest.mock("notistack", () => ({
  ...jest.requireActual("notistack"),
  useSnackbar: () => ({
    enqueueSnackbar: mockEnqueue,
  }),
}));
jest.mock("axios");
jest.mock("uuid", () => {
  let value = 0;
  return () => value++;
});

const props = {
  setUserTasks: jest.fn(),
  onDelete: jest.fn(),
  tasks: [
    {
      id: "d8636c38-3176-494e-9c38-fd158a866985",
      taskName: "test",
      taskDescription: "test",
      date: "14/6/2022, 23:20:14",
      state: "Done",
    },
    {
      id: "55667a73-8486-4cec-bb9d-790b120a9ba1",
      taskName: "Some task name",
      taskDescription: "task\n",
      date: "14/6/2022, 23:21:09",
      state: "InProgress",
    },
  ] as Task[],
  task: {
    id: "55667a73-8486-4cec-bb9d-790b120a9ba1",
    taskName: "Some task name",
    taskDescription: "task\n",
    date: "14/6/2022, 23:21:09",
    state: "InProgress",
  } as Task,
};

describe("Given a TaskCard component", () => {
  describe("When it rendered", () => {
    test("It should show button group", () => {
      render(<TaskCard {...props} />);

      const updateButton = screen.getByRole("group", {
        name: "button group for update and delete task",
      });

      expect(updateButton).toBeInTheDocument();
    });

    test("It should show delete button", () => {
      render(<TaskCard {...props} />);

      const deleteButton = screen.getByRole("button", {
        name: "delete",
      });

      expect(deleteButton).toBeInTheDocument();
    });

    test("It should show update Button", () => {
      render(<TaskCard {...props} />);

      const updateButton = screen.getByRole("button", {
        name: "update",
      });

      expect(updateButton).toBeInTheDocument();
    });
  });
});
