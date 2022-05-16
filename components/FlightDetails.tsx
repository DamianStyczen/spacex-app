import { Launch } from "../types/FlightListTypes";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NextLink from "next/link";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
      <Card>
        <CardHeader
          title={
            <Typography component="h1" variant="h4" color="text.primary">
              {data.mission_name}{" "}
              <Chip
                color={data.launch_success ? "success" : "error"}
                label={data.launch_success ? "Success" : "Failure"}
              />
            </Typography>
          }
          subheader={new Date(data.launch_date_local).toLocaleString()}
        ></CardHeader>
        <CardMedia
          component="iframe"
          src={`https://www.youtube.com/embed/${data.links.youtube_id}?autoplay=1&mute=1`}
          allow="autoPlay"
          style={{ aspectRatio: "16 / 9" }}
        />
        <CardContent>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography fontWeight={"700"}>General Information</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion disabled>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography>Disabled Accordion</Typography>
            </AccordionSummary>
          </Accordion>
        </CardContent>
      </Card>
    </>
  );
}
