import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

afterEach(() => {
  jest.clearAllMocks();
  jest.restoreAllMocks();
  jest.resetModules();
});

jest.mock("@auth0/nextjs-auth0", () => ({
  __esModule: true,
  useUser: () => ({}),
}));

describe("Given a Header component", () => {
  describe("When it rendered", () => {
    describe("When the user is not logged in", () => {
      test("Then it should show text message for the not logged-in user", async () => {
        render(<Header />);

        const text = screen.getByText(
          /You should be logged in to see your tasks/i
        );

        expect(text).toBeInTheDocument();
      });
    });

    test("Then it should show Login button", async () => {
      render(<Header />);

      const loginButton = screen.getByRole("link", {
        name: "Login",
      });

      expect(loginButton).toBeInTheDocument();
    });
  });
});
