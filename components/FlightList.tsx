import { useRef, useEffect, useState } from "react";
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
import CircularProgress from "@mui/material/CircularProgress";
import Input from "@mui/material/Input";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

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
  isLoading: boolean;
  searchValue: string;
  setSearchValue: (search: string) => void;
  handleSearchClick: () => void;
};

export default function FlightList({
  launches,
  page,
  perPage,
  setPage,
  setPerPage,
  isLoading,
  searchValue,
  setSearchValue,
  handleSearchClick,
}: FlightListProps) {
  const [loaderHeight, setLoaderHeight] = useState(637);
  const tableBodyRef = useRef<HTMLTableSectionElement | null>(null);

  useEffect(() => {
    if (!tableBodyRef) {
      return;
    }

    const newLoaderHeight = tableBodyRef?.current?.clientHeight || 637;
    setLoaderHeight(newLoaderHeight);
  }, [isLoading]);

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

  const loader = (
    <TableRow>
      <TableCell
        colSpan={5}
        align="center"
        sx={{
          height: loaderHeight,
        }}
      >
        <CircularProgress />
      </TableCell>
    </TableRow>
  );
  const output = launches.map((launch: Launch) => (
    <FlightListRow launch={launch} />
  ));

  return (
    <Paper>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="table of launches">
          <TableHead>
            <TableRow>
              <TableCell colSpan={5}>
                <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
                  <InputLabel htmlFor="search">Search</InputLabel>
                  <Input
                    id="search"
                    type="text"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleSearchClick}
                        >
                          <SearchIcon />
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </TableCell>
            </TableRow>
            <TableRow>
              {FLIGHT_LIST_TABLE_HEADERS.map((header) => (
                <TableCell key={header}>{header}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody ref={tableBodyRef}>
            {isLoading ? loader : output}
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
