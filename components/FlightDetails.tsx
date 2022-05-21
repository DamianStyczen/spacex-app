import { useState } from "react";
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
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Modal from "@mui/material/Modal";

type FlightDetailsProps = {
  data: Launch;
};

const fullImageBoxStyles = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const getYoutubeId = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);

  return match && match[2].length === 11 ? match[2] : null;
};

export default function FlightDetails({ data }: FlightDetailsProps) {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [chosenImage, setChosenImage] = useState("");

  const {
    mission_name,
    details,
    launch_date_local,
    launch_success,
    links: { video_link, flickr_images, article_link },
  } = data;

  const openFullImage = (url: string) => {
    setIsImageOpen(true);
    setChosenImage(url);
  };

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
            <Typography component="h1" variant="h4" color="text.primary">
              {mission_name}{" "}
              <Chip
                color={launch_success ? "success" : "error"}
                label={launch_success ? "Success" : "Failure"}
              />
            </Typography>
          }
          subheader={new Date(launch_date_local).toLocaleString()}
        ></CardHeader>
        <CardContent>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography fontWeight={700}>General Information</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{details}</Typography>
              {article_link ? (
                <Typography>
                  <Button href={article_link}>Read more</Button>
                </Typography>
              ) : null}
            </AccordionDetails>
          </Accordion>

          <Accordion disabled={!video_link}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography fontWeight={700}>Video</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Card>
                {video_link && (
                  <CardMedia
                    component="iframe"
                    src={`https://www.youtube.com/embed/${getYoutubeId(
                      video_link
                    )}?mute=1`}
                    style={{ aspectRatio: "16 / 9" }}
                  />
                )}
              </Card>
            </AccordionDetails>
          </Accordion>

          <Accordion disabled={!flickr_images.length}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography fontWeight={700}>Images</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ImageList cols={3}>
                {flickr_images.map((url, index) => (
                  <ImageListItem key={url} onClick={() => openFullImage(url)}>
                    <img
                      src={url}
                      alt={`${mission_name} - image ${index + 1}`}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </AccordionDetails>
          </Accordion>
        </CardContent>
      </Card>
      <Modal
        open={isImageOpen}
        aria-labelledby="full-size-image-modal"
        onClose={() => setIsImageOpen(false)}
      >
        <Box sx={fullImageBoxStyles}>
          <img
            src={chosenImage}
            alt={`${mission_name} - full size`}
            style={{ maxHeight: "80vh", maxWidth: "80vw" }}
          />
        </Box>
      </Modal>
    </>
  );
}
