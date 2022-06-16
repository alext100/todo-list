import { render, screen } from "@testing-library/react";
import { Task } from "type";
import CreateTask from "./CreateTask";

jest.mock("axios");
jest.mock("uuid", () => {
  let value = 0;
  return () => value++;
});
const mockEnqueue = jest.fn();
jest.mock("notistack", () => ({
  ...jest.requireActual("notistack"),
  useSnackbar: () => ({
    enqueueSnackbar: mockEnqueue,
  }),
}));

const props = {
  setUserTasks: jest.fn(),
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
};

describe("Given a CreateTask component", () => {
  describe("When it rendered", () => {
    test("It should show input area for task name", () => {
      render(<CreateTask {...props} />);

      const inputTaskNameArea = screen.getByRole("textbox", {
        name: "Task name",
      });

      expect(inputTaskNameArea).toBeInTheDocument();
    });

    test("It should show input area for task description", () => {
      render(<CreateTask {...props} />);

      const inputTaskDescriptionArea = screen.getByRole("textbox", {
        name: "Task description",
      });

      expect(inputTaskDescriptionArea).toBeInTheDocument();
    });

    test("It should show submit button", () => {
      render(<CreateTask {...props} />);

      const submitButton = screen.getByRole("button", { name: "Add to Tasks" });

      expect(submitButton).toBeInTheDocument();
    });
  });
});
