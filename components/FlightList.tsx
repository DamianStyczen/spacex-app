import { Launch } from "../types/FlightListTypes";
import FlightListRow from "./FlightListRow";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";

const FLIGHT_LIST_TABLE_HEADERS = [
  "Mission",
  "Date",
  "Site name",
  "Rocket",
  "",
];

type FlightListProps = {
  launches: Launch[];
  page: number;
  perPage: number;
  setPage: (page: number) => void;
  setPerPage: (perPage: number) => void;
};

export default function FlightList({
  launches,
  page,
  perPage,
  setPage,
  setPerPage,
}: FlightListProps) {
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  if (!launches) {
    return null;
  }

  return (
    <Paper>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="table of launches">
          <TableHead>
            <TableRow>
              {FLIGHT_LIST_TABLE_HEADERS.map((header) => (
                <TableCell key={header}>{header}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {launches.map((launch: Launch) => (
              <FlightListRow launch={launch} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        count={30} // TODO: fix count
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        rowsPerPage={perPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
