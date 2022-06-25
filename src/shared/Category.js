import React from "react";
import "../styles/App.css";
import "../styles/Category.css";

const Category = ({ category, handleShowMore }) => {
  return (
    <div className="category">
      <div className="cards_wrapper">
        {category.map((item) => (
          <div key={item.id} className="card">
            <img src={item.url} alt="img" />
          </div>
        ))}
      </div>
      {!!category.length && (
        <button className="load_button" onClick={handleShowMore}>
          show more
        </button>
      )}
    </div>
  );
};

export default Category;
