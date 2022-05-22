import React from "react";
import { render, screen } from "@testing-library/react";
import FlightList from "./FlightList";

const launches = [
  {
    id: "101",
    mission_name: "SAOCOM 1B, GNOMES-1, Tyvak-0172",
    launch_date_local: "2020-08-30T19:18:00-04:00",
    launch_success: true,
    launch_site: {
      site_name: "CCAFS SLC 40",
      __typename: "LaunchSite",
    },
    rocket: {
      rocket_name: "Falcon 9",
      __typename: "LaunchRocket",
    },
    __typename: "Launch",
  },
  {
    id: "100",
    mission_name: "Starlink-10 (v1.0) & SkySat 19-21",
    launch_date_local: "2020-08-18T10:31:00-04:00",
    launch_success: true,
    launch_site: {
      site_name: "CCAFS SLC 40",
      __typename: "LaunchSite",
    },
    rocket: {
      rocket_name: "Falcon 9",
      __typename: "LaunchRocket",
    },
    __typename: "Launch",
  },
  {
    id: "99",
    mission_name: "Starlink-9 (v1.0) & BlackSky Global 5-6",
    launch_date_local: "2020-08-07T01:12:00-04:00",
    launch_success: true,
    launch_site: {
      site_name: "KSC LC 39A",
      __typename: "LaunchSite",
    },
    rocket: {
      rocket_name: "Falcon 9",
      __typename: "LaunchRocket",
    },
    __typename: "Launch",
  },
  {
    id: "98",
    mission_name: "ANASIS-II",
    launch_date_local: "2020-07-20T17:30:00-04:00",
    launch_success: true,
    launch_site: {
      site_name: "CCAFS SLC 40",
      __typename: "LaunchSite",
    },
    rocket: {
      rocket_name: "Falcon 9",
      __typename: "LaunchRocket",
    },
    __typename: "Launch",
  },
  {
    id: "97",
    mission_name: "GPS III SV03 (Columbus)",
    launch_date_local: "2020-06-30T15:55:00-04:00",
    launch_success: true,
    launch_site: {
      site_name: "CCAFS SLC 40",
      __typename: "LaunchSite",
    },
    rocket: {
      rocket_name: "Falcon 9",
      __typename: "LaunchRocket",
    },
    __typename: "Launch",
  },
  {
    id: "96",
    mission_name: "Starlink-8 & SkySat 16-18",
    launch_date_local: "2020-06-13T05:21:00-04:00",
    launch_success: true,
    launch_site: {
      site_name: "CCAFS SLC 40",
      __typename: "LaunchSite",
    },
    rocket: {
      rocket_name: "Falcon 9",
      __typename: "LaunchRocket",
    },
    __typename: "Launch",
  },
  {
    id: "95",
    mission_name: "Starlink 7",
    launch_date_local: "2020-06-03T21:25:00-04:00",
    launch_success: true,
    launch_site: {
      site_name: "CCAFS SLC 40",
      __typename: "LaunchSite",
    },
    rocket: {
      rocket_name: "Falcon 9",
      __typename: "LaunchRocket",
    },
    __typename: "Launch",
  },
  {
    id: "94",
    mission_name: "CCtCap Demo Mission 2",
    launch_date_local: "2020-05-30T15:22:00-04:00",
    launch_success: true,
    launch_site: {
      site_name: "KSC LC 39A",
      __typename: "LaunchSite",
    },
    rocket: {
      rocket_name: "Falcon 9",
      __typename: "LaunchRocket",
    },
    __typename: "Launch",
  },
  {
    id: "93",
    mission_name: "Starlink 6",
    launch_date_local: "2020-04-22T15:30:00-04:00",
    launch_success: true,
    launch_site: {
      site_name: "KSC LC 39A",
      __typename: "LaunchSite",
    },
    rocket: {
      rocket_name: "Falcon 9",
      __typename: "LaunchRocket",
    },
    __typename: "Launch",
  },
  {
    id: "92",
    mission_name: "Starlink 5",
    launch_date_local: "2020-03-18T08:16:00-04:00",
    launch_success: true,
    launch_site: {
      site_name: "KSC LC 39A",
      __typename: "LaunchSite",
    },
    rocket: {
      rocket_name: "Falcon 9",
      __typename: "LaunchRocket",
    },
    __typename: "Launch",
  },
];

it("should render table with correct number of rows", () => {
  const props = {
    launches: launches as any,
    page: 1,
    perPage: 10,
    isLoading: false,
    searchValue: "",
    setPage: jest.fn(() => {}),
    setPerPage: jest.fn(() => {}),
    setSearchValue: jest.fn(() => {}),
  };

  render(<FlightList {...props} />);

  const tableBody = screen.getByTestId("launches-table-body");

  expect(tableBody.querySelectorAll("tr")).toHaveLength(10);
});

it("should display loader when loading", () => {
  const props = {
    launches: launches as any,
    page: 1,
    perPage: 10,
    isLoading: true,
    searchValue: "",
    setPage: jest.fn(() => {}),
    setPerPage: jest.fn(() => {}),
    setSearchValue: jest.fn(() => {}),
  };

  render(<FlightList {...props} />);

  const tableBody = screen.getByTestId("launches-table-body");
  const loader = screen.getByTestId("launches-loader");

  expect(tableBody.querySelectorAll("tr")).toHaveLength(1);
  expect(loader).toBeInTheDocument();
});
