import { useState } from "react";
import Box from "@mui/material/Box";
import MuiImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Modal from "@mui/material/Modal";
import Image from "next/image";

type ImageListProps = {
  missionName: string;
  images: string[];
};

const fullImageBoxStyles = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

export default function ImageList({ images, missionName }: ImageListProps) {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [chosenImage, setChosenImage] = useState("");

  const openFullImage = (url: string) => {
    setIsImageOpen(true);
    setChosenImage(url);
  };

  return (
    <>
      <MuiImageList cols={3}>
        {images.map((url, index) => (
          <ImageListItem key={url} onClick={() => openFullImage(url)}>
            <img
              src={url}
              alt={`${missionName} - image ${index + 1}`}
              loading="lazy"
              data-testid="image"
            />
          </ImageListItem>
        ))}
      </MuiImageList>
      <Modal
        open={isImageOpen}
        aria-labelledby="full-size-image-modal"
        onClose={() => setIsImageOpen(false)}
      >
        <Box sx={fullImageBoxStyles}>
          <img
            src={chosenImage}
            alt={`${missionName} - full size`}
            style={{ maxHeight: "80vh", maxWidth: "80vw" }}
            data-testid="full-image"
          />
        </Box>
      </Modal>
    </>
  );
}
