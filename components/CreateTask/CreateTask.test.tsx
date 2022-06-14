import { render, screen } from "@testing-library/react";
import CreateTask from "./CreateTask";

jest.mock("axios");

describe("Given a CreateTask component", () => {
  describe("When it rendered", () => {
    test("It should show input area for task name", () => {
      render(<CreateTask />);

      const inputTuitArea = screen.getByRole("textbox", {
        name: "Task name",
      });

      expect(inputTuitArea).toBeInTheDocument();
    });

    test("It should show input area for task description", () => {
      render(<CreateTask />);

      const inputTuitArea = screen.getByRole("textbox", {
        name: "Task description",
      });

      expect(inputTuitArea).toBeInTheDocument();
    });

    test("It should show submit button", () => {
      render(<CreateTask />);

      const submitButton = screen.getByRole("button", { name: "Add to Tasks" });

      expect(submitButton).toBeInTheDocument();
    });
  });
});
