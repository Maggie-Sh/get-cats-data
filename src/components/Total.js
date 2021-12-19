import React, { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";
import "../styles/Cases.css";

function Total() {
  const [total, setTotal] = useState([]);
  const [showProgress, setShowProgress] = useState(false);
  useEffect(() => {
    setShowProgress(true);
    fetch("https://api.covid19api.com/summary")
      .then((result) => result.json())
      .then((data) => {
        setTotal(data.Global);
        setShowProgress(false);
      })
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <div className="container total">
      {!!showProgress && (
        <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
          <LinearProgress color="inherit" />
        </Stack>
      )}
      <h1> New Confirmed: {total.NewConfirmed} </h1>
      <h1>New Deaths: {total.NewDeaths} </h1>
      <h1>Total Confirmed: {total.TotalConfirmed} </h1>
      <h1>Total Deaths: {total.TotalDeaths} </h1>
    </div>
  );
}

export default Total;
