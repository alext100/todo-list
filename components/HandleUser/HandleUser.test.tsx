import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import HandleUser from "./HandleUser";
import Header from "../Header/Header";

const user = {
  email: "user@mail.com",
  name: "Username",
  sub: "google-oauth2354tygj",
};

jest.mock("@auth0/nextjs-auth0", () => ({
  useUser: () => ({
    user,
  }),
}));

afterEach(() => {
  jest.clearAllMocks();
  jest.restoreAllMocks();
  jest.resetModules();
});

describe("Given a HandleUser component", () => {
  describe("When it rendered", () => {
    describe("When the user is logged-in", () => {
      test("Then it should show message for logged-in user", async () => {
        render(<Header />);

        const text = screen.getByText(`All your's tasks`);

        expect(text).toBeInTheDocument();
      });
    });

    test("Then it should show user profile button", async () => {
      render(<HandleUser />);

      const profileButton = screen.getByText(/Profile/i);

      expect(profileButton).toBeInTheDocument();
    });

    test("Then it should show profile Logout button", async () => {
      render(<HandleUser />);

      const logoutButton = screen.getByText(/Logout/i);

      expect(logoutButton).toBeInTheDocument();
    });

    test("Then it should show user settings button", async () => {
      render(<HandleUser />);

      const settingsButton = screen.getByRole("button", {
        name: "Open settings",
      });

      expect(settingsButton).toBeInTheDocument();
    });
  });
});
