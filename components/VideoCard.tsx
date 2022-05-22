import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

type VideoCardProps = {
  url: string;
};

const getYoutubeId = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);

  return match && match[2].length === 11 ? match[2] : null;
};

export default function VideoCard({ url }: VideoCardProps) {
  const youtubeId = getYoutubeId(url);

  return (
    <Card>
      <CardMedia
        component="iframe"
        src={`https://www.youtube.com/embed/${youtubeId}?mute=1`}
        style={{ aspectRatio: "16 / 9" }}
      />
    </Card>
  );
}
