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
import Button from "@mui/material/Button";
import RocketInformation from "./RocketInformation";
import Accordion from "./FlightDetailsAccordion";
import VideoCard from "./VideoCard";
import ImageList from "./ImageList";

type FlightDetailsProps = {
  data: Launch;
};

export default function FlightDetails({ data }: FlightDetailsProps) {
  const {
    mission_name,
    details,
    launch_date_local,
    launch_success,
    links: { video_link, flickr_images, article_link },
    rocket,
  } = data;

  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <Link component={NextLink} underline="hover" color="inherit" href="/">
          Flights
        </Link>
        <Typography color="text.primary">{mission_name}</Typography>
      </Breadcrumbs>
      <Card>
        {flickr_images.length ? (
          <CardMedia
            component="img"
            src={flickr_images[flickr_images.length - 1]}
            style={{ aspectRatio: "16 / 9" }}
          />
        ) : null}
        <CardHeader
          title={
            <Typography component="h1" variant="h5" color="text.primary">
              {mission_name}{" "}
              <Chip
                color={launch_success ? "success" : "error"}
                label={launch_success ? "Success" : "Failure"}
                size="small"
              />
            </Typography>
          }
          subheader={new Date(launch_date_local).toLocaleString()}
        ></CardHeader>
        <CardContent>
          <Typography>{details}</Typography>
          {article_link ? (
            <Typography>
              <Button href={article_link}>Read more</Button>
            </Typography>
          ) : null}
          <Accordion title="Rocket" index={0}>
            <RocketInformation rocket={rocket} />
          </Accordion>
          <Accordion title="Video" index={1} disabled={!video_link}>
            {video_link ? <VideoCard url={video_link} /> : null}
          </Accordion>
          <Accordion title="Images" index={2} disabled={!flickr_images.length}>
            {flickr_images.length ? (
              <ImageList images={flickr_images} missionName={mission_name} />
            ) : null}
          </Accordion>
        </CardContent>
      </Card>
    </>
  );
}
