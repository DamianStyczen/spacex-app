import React from "react";
import { render, screen } from "@testing-library/react";
import Layout from "./Layout";

it("should render layout correctly", () => {
  const props = {
    children: <div>Content</div>,
  };

  render(<Layout {...props} />);
  const header = screen.getByText("SpaceX App");
  const footer = screen.getByTestId("footer");
  const content = screen.getByText("Content");

  expect(header).toBeInTheDocument();
  expect(content).toBeInTheDocument();
  expect(footer).toBeInTheDocument();
  expect(footer).toHaveTextContent(
    "Created by Damian Styczeń for Omni Calculator"
  );
});
