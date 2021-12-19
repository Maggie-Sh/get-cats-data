import React, { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import InputAdornment from "@mui/material/InputAdornment";
import "../styles/Cases.css";

function ByCountries() {
  const [dataByCountries, setDataByCountries] = useState([]);
  const [showProgress, setShowProgress] = useState(false);
  const [searchByCountry, setSearchByCountry] = useState("");

  useEffect(() => {
    setShowProgress(true);
    fetch("https://api.covid19api.com/summary")
      .then((result) => result.json())
      .then((data) => {
        setDataByCountries(data.Countries);
        setShowProgress(false);
      });
  }, []);

  return (
    <div className="container countries_container">
      {!!showProgress && (
        <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
          <LinearProgress color="inherit" />
        </Stack>
      )}
      <TextField
        variant="standard"
        size="large"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchRoundedIcon />
            </InputAdornment>
          ),
        }}
        value={searchByCountry}
        onChange={(e) => setSearchByCountry(e.target.value)}
      />
      <Paper className="paper">
        <TableContainer className="table_container">
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <b>Country</b>
                </TableCell>
                <TableCell align="right" className="table_cell">
                  <b>Total Cases</b>
                </TableCell>
                <TableCell align="right" className="table_cell">
                  <b>New Cases</b>
                </TableCell>
                <TableCell align="right" className="table_cell">
                  <b>Total Recovered</b>
                </TableCell>
                <TableCell align="right" className="table_cell">
                  <b>New Recovered</b>
                </TableCell>
                <TableCell align="right" className="table_cell">
                  <b>Total Deaths</b>
                </TableCell>
                <TableCell align="right" className="table_cell">
                  <b>New Deaths</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataByCountries.map((country) => {
                if (country.Country.toLowerCase().includes(searchByCountry)) {
                  return (
                    <TableRow key={country.ID}>
                      <TableCell component="th" scope="row">
                        {country.Country}
                      </TableCell>
                      <TableCell align="right" className="table_cell">
                        {country.TotalConfirmed}
                      </TableCell>
                      <TableCell
                        id="confirmed"
                        align="right"
                        className="table_cell confirmed"
                      >
                        <b>{country.NewConfirmed}</b>
                      </TableCell>
                      <TableCell align="right">
                        {country.TotalRecovered}
                      </TableCell>
                      <TableCell
                        id="recovered"
                        align="right"
                        className="table_cell recovered"
                      >
                        <b>{country.NewRecovered}</b>
                      </TableCell>
                      <TableCell align="right" style={{ textAlign: "center" }}>
                        {country.TotalDeaths}
                      </TableCell>
                      <TableCell
                        id="death"
                        align="right"
                        className="table_cell deaths"
                      >
                        <b> {country.NewDeaths}</b>
                      </TableCell>
                    </TableRow>
                  );
                }
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}

export default ByCountries;
