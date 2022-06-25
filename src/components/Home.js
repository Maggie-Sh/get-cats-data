import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux/es/exports";
import "../styles/App.css";

const Home = () => {
  const data = useSelector((state) => state.categories);

  return (
    <div className="home">
      <div className="title">Welcome!!</div>
      <div className="content">
        Here you can find cats images of every category.
      </div>
    </div>
  );
};

export default Home;
