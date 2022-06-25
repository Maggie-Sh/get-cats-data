import React, { useState, useEffect } from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Boxes from "./components/Boxes";
import Clothes from "./components/Clothes";
import Hats from "./components/Hats";
import Sinks from "./components/Sinks";
import Space from "./components/Space";
import Sunglasses from "./components/Sunglasses";
import Ties from "./components/Ties";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "./redux/actions/categoriesActions";
import axios from "axios";

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  const categories = useSelector((state) => state.categories);

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://api.thecatapi.com/v1/categories")
      .then((res) => dispatch(getCategories(res.data)));
  }, []);

  return (
    <Router>
      <nav className="display_flex_standard navbar">
        <div>
          <Link to="/" className="navbar_item logo">
            Home
          </Link>
        </div>
        <div
          className={`display_flex_standard ${
            !openMenu ? "menu menu_hidden" : "menu"
          }`}
        >
          <Link to="/boxes" className="navbar_item">
            boxes
          </Link>{" "}
          <Link to="/clothes" className="navbar_item">
            clothes
          </Link>{" "}
          <Link to="/hats" className="navbar_item">
            hats
          </Link>{" "}
          <Link to="/sinks" className="navbar_item">
            sinks
          </Link>{" "}
          <Link to="/space" className="navbar_item">
            space
          </Link>{" "}
          <Link to="/sunglasses" className="navbar_item">
            sunglasses
          </Link>{" "}
          <Link to="/ties" className="navbar_item">
            ties
          </Link>
        </div>
        <div className="burger_menu" onClick={() => setOpenMenu(!openMenu)}>
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/boxes" element={<Boxes />} />
        <Route path="/clothes" element={<Clothes />} />
        <Route path="/hats" element={<Hats />} />
        <Route path="/sinks" element={<Sinks />} />
        <Route path="/space" element={<Space />} />
        <Route path="/sunglasses" element={<Sunglasses />} />
        <Route path="/ties" element={<Ties />} />
      </Routes>
    </Router>
  );
}

export default App;
