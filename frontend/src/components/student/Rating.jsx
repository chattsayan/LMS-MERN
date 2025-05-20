import React from "react";

const Rating = ({ rating, totalStars = 5 }) => {
  return (
    <div className="rating">
      {[...Array(totalStars)].map((_, index) => (
        <span
          key={index}
          className={`star ${index < rating ? "filled" : "empty"}`}
        >
          ★
        </span>
      ))}
      <span className="rating-value">({rating})</span>
    </div>
  );
};

export default Rating; 