import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import HandleUser from "./HandleUser";

const loginErrorMessage = "It was error on login";

jest.mock("@auth0/nextjs-auth0", () => ({
  useUser: () => ({
    error: {
      message: loginErrorMessage,
    },
  }),
}));

afterEach(() => {
  jest.clearAllMocks();
  jest.restoreAllMocks();
  jest.resetModules();
});

describe("Given a HandleUser component", () => {
  describe("When it rendered", () => {
    describe("And is error", () => {
      test("Then it should show login error message", async () => {
        render(<HandleUser />);

        const errorMessage = screen.getByText(loginErrorMessage);

        expect(errorMessage).toBeInTheDocument();
      });
    });
  });
});
