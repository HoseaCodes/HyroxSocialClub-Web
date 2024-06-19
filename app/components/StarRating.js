import React from 'react';


const StarRating = ({ rating }) => {
  const stars = [];
  
  // Generate stars based on the rating (up to 5 stars)
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      // Render a filled star
      stars.push(<i key={i} className="fas fa-star star-filled"></i>);
    } else {
      // Render an empty star
      stars.push(<i key={i} className="far fa-star star-empty"></i>);
    }
  }

  return (
    <div className="star-rating">
      {stars}
    </div>
  );
};

export default StarRating;
