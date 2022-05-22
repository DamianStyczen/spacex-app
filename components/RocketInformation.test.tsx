import React from "react";
import { render, screen } from "@testing-library/react";
import RocketInformation from "./RocketInformation";

it("should render rocket information correctly", () => {
  const props = {
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
          },
          {
            landing_vehicle: "OCISLY2",
            flight: 1,
            landing_type: null,
            land_success: false,
            landing_intent: false,
          },
          {
            landing_vehicle: "OCISLY3",
            flight: 3,
            landing_type: "ASDS",
            land_success: true,
            landing_intent: true,
          },
        ],
      },
      second_stage: {
        payloads: [
          {
            id: null,
            payload_type: "Crew Dragon",
            payload_mass_kg: null,
            orbit: "ISS",
            nationality: "United States",
            manufacturer: "SpaceX",
            customers: ["NASA (CCtCap)"],
          },
          {
            id: null,
            payload_type: "Crew Dragon 2",
            payload_mass_kg: 9001,
            orbit: "ISS",
            nationality: "Poland",
            manufacturer: "SpaceX Poland",
            customers: ["NASA", "JAXA"],
          },
        ],
      },
    },
  };

  render(<RocketInformation {...props} />);

  const rocketName = screen.getByTestId("rocket-name");
  const cores = screen.getByTestId("cores");
  const payloads = screen.getByTestId("payloads");
  const coresTableBody = screen.getByTestId("cores-table-body");
  const payloadsTableBody = screen.getByTestId("payloads-table-body");

  expect(rocketName).toHaveTextContent("Falcon 9");
  expect(cores).toHaveTextContent("3");
  expect(payloads).toHaveTextContent("2");
  expect(coresTableBody).toBeInTheDocument();
  expect(payloadsTableBody).toBeInTheDocument();
  expect(coresTableBody.querySelectorAll("tr").length).toEqual(3);
  expect(payloadsTableBody.querySelectorAll("tr").length).toEqual(2);
});
