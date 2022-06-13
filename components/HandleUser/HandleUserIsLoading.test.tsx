import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import HandleUser from "./HandleUser";

jest.mock("@auth0/nextjs-auth0", () => ({
  useUser: () => ({
    isLoading: true,
  }),
}));

afterEach(() => {
  jest.clearAllMocks();
  jest.restoreAllMocks();
  jest.resetModules();
});

describe("Given a HandleUser component", () => {
  describe("When it rendered", () => {
    describe("And is loading", () => {
      test("Then it should show 'Loading...' message", async () => {
        render(<HandleUser />);

        const loadingMessage = screen.getByText(/Loading.../i);

        expect(loadingMessage).toBeInTheDocument();
      });
    });
  });
});
