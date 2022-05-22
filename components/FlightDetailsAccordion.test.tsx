import React from "react";
import { render, screen } from "@testing-library/react";
import FlightDetailsAccordion from "./FlightDetailsAccordion";

it("should render accordion with title and content", () => {
  const props = {
    title: "Test Title",
    children: <div>Test content</div>,
  };
  render(<FlightDetailsAccordion {...props} />);
  const headerElement = screen.getByText("Test Title");
  const contentElement = screen.getByText("Test content");
  const headerButton = screen.getByRole("button");

  expect(headerElement).toBeInTheDocument();
  expect(contentElement).toBeInTheDocument();
  expect(headerButton).not.toHaveAttribute("aria-disabled");
});

it("should render disabled accordion", () => {
  const props = {
    title: "Test Title",
    disabled: true,
  };
  render(<FlightDetailsAccordion {...props} />);

  const headerButton = screen.getByRole("button");

  expect(headerButton).toBeInTheDocument();
  expect(headerButton).toHaveAttribute("aria-disabled", "true");
});
