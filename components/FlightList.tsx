import { useCallback, useRef, useEffect, useState } from "react";
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
import { gql } from "@apollo/client";
import debounce from "lodash.debounce";

export const LAUNCHES_QUERY = gql`
  query launches($limit: Int!, $offset: Int!, $find: String) {
    launches(
      find: { mission_name: $find }
      limit: $limit
      offset: $offset
      sort: "launch_date_local"
      order: "desc"
    ) {
      mission_name
      launch_date_local
      launch_success
      launch_site {
        site_name
      }
      rocket {
        rocket_name
      }
    }
  }
`;

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
}: FlightListProps) {
  const [loaderHeight, setLoaderHeight] = useState(637);
  const [inputValue, setInputValue] = useState(searchValue);
  const tableBodyRef = useRef<HTMLTableSectionElement | null>(null);

  useEffect(() => {
    if (!tableBodyRef) {
      return;
    }

    const newLoaderHeight = tableBodyRef?.current?.clientHeight || 637;
    setLoaderHeight(newLoaderHeight);
  }, [isLoading]);

  const search = useCallback(
    debounce((value) => {
      setSearchValue(value);
      setPage(0);
    }, 300),
    []
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    search(e.target.value);
  };

  const changePage = (e: unknown, newPage: number) => {
    setPage(newPage);
  };

  const changeRowsPerPage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };

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
    <FlightListRow launch={launch} key={launch.mission_name} />
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
                    value={inputValue}
                    onChange={handleInputChange}
                    startAdornment={
                      <InputAdornment position="start">
                        <IconButton aria-label="toggle password visibility">
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
        count={100} // TODO: fix count
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        rowsPerPage={perPage}
        page={page}
        onPageChange={changePage}
        onRowsPerPageChange={changeRowsPerPage}
      />
    </Paper>
  );
}
