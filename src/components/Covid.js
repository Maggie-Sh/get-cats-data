import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import Total from "./Total";
import ByCountries from "./ByCountries";

function Covid() {
  const [value, setValue] = useState(0);
  return (
    <Router>
      <div>
        <Box sx={{ width: 500, marginLeft: 0 }}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <Link
              style={{
                width: "150px",
                textDecoration: "none",
                fontSize: "25px",
              }}
              to="/"
            >
              <b>Total</b>
            </Link>
            <Link
              style={{
                width: "150px",
                textDecoration: "none",
                fontSize: "25px",
              }}
              to="/byCountries"
            >
              <b> by Countries </b>
            </Link>
          </BottomNavigation>
        </Box>
        <Switch>
          <Route path="/byCountries">
            <ByCountries />
          </Route>
          <Route path="/">
            <Total />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Covid;
