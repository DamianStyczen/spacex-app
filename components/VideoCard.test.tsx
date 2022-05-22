import React from "react";
import { render, screen } from "@testing-library/react";
import VideoCard from "./VideoCard";

it("should render video with correct url", () => {
  const props = {
    url: "https://youtu.be/J442-ti-Dhg",
  };
  render(<VideoCard {...props} />);

  const video = screen.getByTestId("video");
  expect(video).toBeInTheDocument();

  expect(video).toHaveAttribute(
    "src",
    "https://www.youtube.com/embed/J442-ti-Dhg?mute=1"
  );
});
