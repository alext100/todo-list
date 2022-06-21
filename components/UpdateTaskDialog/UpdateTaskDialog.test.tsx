import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Task } from "type";
import UpdateTaskDialog from "./UpdateTaskDialog";

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
    taskName: "",
    taskDescription: "task",
    date: "14/6/2022, 23:21:09",
    state: "InProgress",
  } as Task,
};

afterEach(() => {
  jest.clearAllMocks();
  jest.restoreAllMocks();
  jest.resetModules();
});

describe("Given a UpdateTaskDialog component", () => {
  describe("When it rendered", () => {
    test("It should show update button", () => {
      render(<UpdateTaskDialog {...props} />);

      const updateButton = screen.getByRole("button", {
        name: "update",
      });

      expect(updateButton).toBeInTheDocument();
    });

    describe("When the user click on Update button", () => {
      test("Then it should show dialog modal", async () => {
        const user = userEvent.setup();
        render(<UpdateTaskDialog {...props} />);
        const updateButton = screen.getByRole("button", {
          name: "update",
        });
        const dialog = screen.getByTestId("dialog");

        expect(dialog).not.toBeVisible();

        await user.click(updateButton);

        expect(dialog).toBeVisible();
      });
    });

    describe("When a user enter new task name and click on Save button", () => {
      test("Then it should call setUserTasks function with updated task", async () => {
        render(<UpdateTaskDialog {...props} />);
        const user = userEvent.setup();
        const newTaskName = "New task name";

        const saveButton = screen.getByText("Save");
        const taskNameInput = screen.getByLabelText(/Task name/i);
        const taskDescriptionInput = screen.getByLabelText(/Task description/i);

        await user.click(taskNameInput);
        await user.keyboard(newTaskName);
        await user.click(saveButton);

        expect(taskNameInput).toBeInTheDocument();
        expect(taskDescriptionInput).toBeInTheDocument();
        expect(saveButton).toBeInTheDocument();
        expect(taskNameInput).toHaveValue("New task name");
        expect(taskDescriptionInput).toHaveValue("task");
        expect(props.setUserTasks).toHaveBeenCalledTimes(1);
      });
    });
  });
});
