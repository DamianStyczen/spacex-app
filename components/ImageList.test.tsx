import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ImageList from "./ImageList";

it("should render image list and full image correctly", () => {
  const props = {
    images: [
      "https://live.staticflickr.com/65535/50618376646_8f52c31fc4_o.jpg",
      "https://live.staticflickr.com/65535/50618376731_43ddaab1b8_o.jpg",
      "https://live.staticflickr.com/65535/50618376671_ba4e60af7c_o.jpg",
      "https://live.staticflickr.com/65535/50618376351_ecfdee4ab2_o.jpg",
      "https://live.staticflickr.com/65535/50618727917_01e579c4d9_o.jpg",
      "https://live.staticflickr.com/65535/50618355216_2872d1fe98_o.jpg",
      "https://live.staticflickr.com/65535/50618354801_ff3e722884_o.jpg",
    ],
    missionName: "Mars",
  };

  render(<ImageList {...props} />);

  const images = screen.getAllByTestId("image");

  expect(images).toHaveLength(7);

  fireEvent(
    images[0],
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );

  const fullImage = screen.getByTestId("full-image");
  expect(fullImage).toHaveProperty("src", props.images[0]);
});
