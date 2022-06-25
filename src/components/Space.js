import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Category from "../shared/Category";

const Space = () => {
  const [space, setSpace] = useState([]);
  const [page, setPage] = useState(1);

  const categories = useSelector((state) => state.categories);

  const category = categories.find(
    (item) => item.name === window.location.pathname.slice(1)
  );
  const getData = () => {
    axios
      .get(
        `https://api.thecatapi.com/v1/images/search?limit=10&page=${page}&category_ids=${category.id}`
      )
      .then((res) => {
        setSpace([...space, ...res.data]);
      });
  };

  useEffect(() => {
    getData();
  }, [page]);

  const handleShowMore = () => {
    setPage(page + 1);
  };

  return (
    !!space.length && (
      <Category category={space} handleShowMore={handleShowMore} />
    )
  );
};

export default Space;
