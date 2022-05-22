import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Launch } from "../types/FlightListTypes";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

type RocketInformationProps = {
  rocket: Launch["rocket"];
};

type CoresTableProps = {
  cores: Launch["rocket"]["first_stage"]["cores"];
};

type PayloadsTableProps = {
  payloads: Launch["rocket"]["second_stage"]["payloads"];
};

const CoresTable = ({ cores }: CoresTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Core</TableCell>
            <TableCell>Flight</TableCell>
            <TableCell>Landing Intent</TableCell>
            <TableCell>Landing Type</TableCell>
            <TableCell>Landing success</TableCell>
            <TableCell>Landing vehicle</TableCell>
          </TableRow>
        </TableHead>
        <TableBody data-testid="cores-table-body">
          {cores.map((core, index) => (
            <TableRow
              key={core.landing_vehicle}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell data-testid="cores-table-flight">
                {core.flight}
              </TableCell>
              <TableCell data-testid="cores-table-landing-intent">
                {core.landing_intent ? "Yes" : "No"}
              </TableCell>
              <TableCell data-testid="cores-table-landing-type">
                {core.landing_type}
              </TableCell>
              <TableCell data-testid="cores-table-land-success">
                {core.land_success ? "Yes" : "No"}
              </TableCell>
              <TableCell data-testid="cores-table-landing-vehicle">
                {core.landing_vehicle || "-"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const PayloadsTable = ({ payloads }: PayloadsTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Payload</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Mass (kg)</TableCell>
            <TableCell>Orbit</TableCell>
            <TableCell>Nationality</TableCell>
            <TableCell>Manufacturer</TableCell>
            <TableCell>Customers</TableCell>
          </TableRow>
        </TableHead>
        <TableBody data-testid="payloads-table-body">
          {payloads.map((payload, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell data-testid="payloads-table-payload-type">
                {payload.payload_type}
              </TableCell>
              <TableCell data-testid="payloads-table-payload-mass">
                {payload.payload_mass_kg}
              </TableCell>
              <TableCell data-testid="payloads-table-orbit">
                {payload.orbit}
              </TableCell>
              <TableCell data-testid="payloads-table-nationality">
                {payload.nationality}
              </TableCell>
              <TableCell data-testid="payloads-table-manufacturer">
                {payload.manufacturer}
              </TableCell>
              <TableCell data-testid="payloads-table-customers">
                {payload.customers.join(", ")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default function RocketInformation({ rocket }: RocketInformationProps) {
  return (
    <List>
      <ListItem>
        <ListItemText
          primary="Name"
          secondary={rocket.rocket_name}
          data-testid="rocket-name"
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary="Cores"
          secondary={rocket.first_stage.cores.length}
          data-testid="cores"
        />
      </ListItem>
      <ListItem>
        <CoresTable cores={rocket.first_stage.cores} />
      </ListItem>
      <ListItem>
        <ListItemText
          primary="Payloads"
          secondary={rocket.second_stage.payloads.length}
          data-testid="payloads"
        />
      </ListItem>
      <ListItem>
        <PayloadsTable payloads={rocket.second_stage.payloads} />
      </ListItem>
    </List>
  );
}
