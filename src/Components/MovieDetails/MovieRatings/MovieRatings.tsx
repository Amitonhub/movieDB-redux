import React from "react";
import styles from "./MovieRatings.module.css"

interface RatingStarsProps {
  rating: number;
  maxRating: number;
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating, maxRating }) => {
  const filledStars = Math.round(rating);
  const remainingStars = maxRating - filledStars;
  const filledStarsArray = Array.from({ length: filledStars });
  const remainingStarsArray = Array.from({ length: remainingStars });

  return (
    <div>
      <div className={styles.ratings}>
        {filledStarsArray.map((_, index) => (
          <span key={index} className={styles.filledStars}>
            &#9733;
          </span>
        ))}
        {remainingStarsArray.map((_, index) => (
          <span key={index} className={styles.emptyStars}>
            &#9733;
          </span>
        ))}
        <div className={styles.ratingLabel}>
          {!isNaN(rating) && rating !== null ? rating.toFixed(1) : "N/A"}/{maxRating}
        </div>
      </div>
    </div>
  );
};

export default RatingStars;
