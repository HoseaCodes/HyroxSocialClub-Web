import React from "react";

const StarRating = ({ stars }) => (
  <div className="star-rating">
    {Array.from({ length: stars }, (_, index) => (
      <span key={index} className="star">
        ★
      </span>
    ))}
  </div>
);

export default StarRating;
