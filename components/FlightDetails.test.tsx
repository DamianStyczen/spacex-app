import React from "react";
import { render, screen } from "@testing-library/react";
import FlightDetails from "./FlightDetails";

const launch = {
  mission_name: "Crew-1",
  details:
    "SpaceX will launch the first operational mission of its Crew Dragon vehicle as part of NASA's Commercial Crew Transportation Capability Program (CCtCap), carrying 3 NASA astronauts and 1 JAXA astronaut to the International Space Station. This mission will be the second crewed flight to launch from the United States since the end of the Space Shuttle program in 2011.",
  launch_success: true,
  launch_date_local: "2020-11-15T19:27:00-05:00",
  links: {
    article_link:
      "https://spaceflightnow.com/2020/11/16/astronauts-ride-spacex-crew-capsule-in-landmark-launch-for-commercial-spaceflight/",
    flickr_images: [
      "https://live.staticflickr.com/65535/50618376646_8f52c31fc4_o.jpg",
      "https://live.staticflickr.com/65535/50618376731_43ddaab1b8_o.jpg",
      "https://live.staticflickr.com/65535/50618376671_ba4e60af7c_o.jpg",
      "https://live.staticflickr.com/65535/50618376351_ecfdee4ab2_o.jpg",
      "https://live.staticflickr.com/65535/50618727917_01e579c4d9_o.jpg",
      "https://live.staticflickr.com/65535/50618355216_2872d1fe98_o.jpg",
      "https://live.staticflickr.com/65535/50618354801_ff3e722884_o.jpg",
      "https://live.staticflickr.com/65535/50618463487_41642939a4_o.jpg",
      "https://live.staticflickr.com/65535/50617619613_5630422345_o.jpg",
      "https://live.staticflickr.com/65535/50617619668_d680d7319c_o.jpg",
      "https://live.staticflickr.com/65535/50617625523_a7484e0abf_o.jpg",
      "https://live.staticflickr.com/65535/50618469202_fa86f88ab3_o.jpg",
      "https://live.staticflickr.com/65535/50617625183_8554412cee_o.jpg",
      "https://live.staticflickr.com/65535/50618470472_fb8e6507d7_o.jpg",
      "https://live.staticflickr.com/65535/50617626838_c0c71de1f7_o.jpg",
      "https://live.staticflickr.com/65535/50617626738_aa3997aaea_o.jpg",
      "https://live.staticflickr.com/65535/50617626408_fb0bba0f89_o.jpg",
    ],
    video_link: "https://youtu.be/bnChQbxLkkI",
  },
  rocket: {
    rocket_name: "Falcon 9",
    rocket_type: "FT",
    first_stage: {
      cores: [
        {
          landing_vehicle: "OCISLY",
          flight: 1,
          landing_type: "ASDS",
          land_success: true,
          landing_intent: true,
          reused: false,
        },
      ],
    },
    second_stage: {
      payloads: [
        {
          id: null,
          reused: false,
          payload_type: "Crew Dragon",
          payload_mass_kg: null,
          orbit: "ISS",
          nationality: "United States",
          manufacturer: "SpaceX",
          customers: ["NASA (CCtCap)"],
        },
      ],
    },
  },
};

it("should render row correctly", () => {
  const props = {
    data: launch as any,
  };

  render(<FlightDetails {...props} />);

  const name = screen.getByTestId("details-title");
  const successChip = screen.getByTestId("details-success");
  const description = screen.getByTestId("details-description");
  const articleLink = screen.getByTestId("details-article-link");

  expect(name).toHaveTextContent(launch.mission_name);
  expect(successChip).toHaveTextContent("Success");
  expect(description).toHaveTextContent(launch.details);
  expect(articleLink).toHaveProperty("href", launch.links.article_link);
});
