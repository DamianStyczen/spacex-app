import { Launch } from "../types/FlightListTypes";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NextLink from "next/link";
import Link from "@mui/material/Link";

type FlightDetailsProps = {
  data: Launch;
};

export default function FlightDetails({ data }: FlightDetailsProps) {
  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <Link component={NextLink} underline="hover" color="inherit" href="/">
          Flights
        </Link>
        <Typography color="text.primary">{data.mission_name}</Typography>
      </Breadcrumbs>
      <Paper
        sx={{
          p: 2,
        }}
      >
        <Typography component="h1" variant="h4" color="text.primary">
          {data.mission_name}
        </Typography>
      </Paper>
    </>
  );
}
