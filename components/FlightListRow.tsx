import { Launch } from "../types/FlightListTypes";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import Link from "next/link";

type Props = {
  launch: Launch;
};

export default function LaunchRow({ launch }: Props) {
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="row">
        {launch.mission_name}
      </TableCell>
      <TableCell>
        {new Date(launch.launch_date_local).toLocaleString()}
      </TableCell>
      <TableCell>{launch.launch_site.site_name}</TableCell>
      <TableCell>{launch.rocket.rocket_name}</TableCell>
      <TableCell>
        <Link href={`/launches/${launch.id}`} passHref>
          <Button size="small">Details</Button>
        </Link>
      </TableCell>
    </TableRow>
  );
}
