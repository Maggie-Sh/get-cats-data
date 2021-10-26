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
    <div>
      {!!showProgress && (
        <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
          <LinearProgress color="inherit" />
        </Stack>
      )}
      <TextField
        variant="standard"
        sx={{ margin: "10px" }}
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
      <Paper sx={{ width: "100%", height: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 500 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <b>Country</b>
                </TableCell>
                <TableCell
                  align="right"
                  style={{ textAlign: "center", minWidth: "170" }}
                >
                  <b>Total Cases</b>
                </TableCell>
                <TableCell
                  align="right"
                  style={{
                    textAlign: "center",
                    minWidth: "170",
                  }}
                >
                  <b>New Cases</b>
                </TableCell>
                <TableCell
                  align="right"
                  style={{ textAlign: "center", minWidth: "170" }}
                >
                  <b>Total Recovered</b>
                </TableCell>
                <TableCell
                  align="right"
                  style={{
                    textAlign: "center",
                    minWidth: "170",
                  }}
                >
                  <b>New Recovered</b>
                </TableCell>
                <TableCell
                  align="right"
                  style={{ textAlign: "center", minWidth: "170" }}
                >
                  <b>Total Deaths</b>
                </TableCell>
                <TableCell
                  align="right"
                  style={{
                    textAlign: "center",
                    minWidth: "170",
                  }}
                >
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
                      <TableCell align="right" style={{ textAlign: "center" }}>
                        {country.TotalConfirmed}
                      </TableCell>
                      <TableCell
                        id="confirmed"
                        align="right"
                        style={{
                          textAlign: "center",
                          backgroundColor: "moccasin",
                        }}
                      >
                        <b>{country.NewConfirmed}</b>
                      </TableCell>
                      <TableCell align="right" style={{ textAlign: "center" }}>
                        {country.TotalRecovered}
                      </TableCell>
                      <TableCell
                        id="recovered"
                        align="right"
                        style={{
                          textAlign: "center",
                          backgroundColor: "palegreen",
                        }}
                      >
                        <b>{country.NewRecovered}</b>
                      </TableCell>
                      <TableCell align="right" style={{ textAlign: "center" }}>
                        {country.TotalDeaths}
                      </TableCell>
                      <TableCell
                        id="death"
                        align="right"
                        style={{
                          textAlign: "center",
                          backgroundColor: "tomato",
                        }}
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
