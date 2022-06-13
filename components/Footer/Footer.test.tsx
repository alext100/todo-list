import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Given a Footer component", () => {
  describe("When it rendered", () => {
    test("Then it should show text 'Made by Aleksandr Turchenko'", async () => {
      render(<Footer />);

      const text = screen.getByText("Made by Aleksandr Turchenko");

      expect(text).toBeInTheDocument();
    });

    test("Then it should show button with GitHub link and icon", async () => {
      render(<Footer />);

      const githubButton = screen.getByRole("button", {
        name: "Go to GitHub page",
      });
      const githubIcon = screen.getByTestId("GitHubIcon");

      expect(githubButton).toBeInTheDocument();
      expect(githubIcon).toBeInTheDocument();
    });

    test("Then it should show button with LinkedIn link and icon", async () => {
      render(<Footer />);

      const linkedInButton = screen.getByRole("button", {
        name: "Go to LinkedIn page",
      });
      const linkedInIcon = screen.getByTestId("GitHubIcon");

      expect(linkedInButton).toBeInTheDocument();
      expect(linkedInIcon).toBeInTheDocument();
    });
  });
});
