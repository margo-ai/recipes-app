import React from "react";

import filledStar from "../../../../shared/assets/filled-star-icon.svg";
import notFilledStar from "../../../../shared/assets/star-icon.svg";

export const renderRecipeDifficulty = (difficulty: string) => {
  switch (difficulty) {
    case "Easy":
      return (
        <div className="difficulty__stars">
          <div className="difficulty__star">
            <img src={filledStar} alt="Filled star" />
          </div>
          <div className="difficulty__star">
            <img src={notFilledStar} alt="Filled star" />
          </div>
          <div className="difficulty__star">
            <img src={notFilledStar} alt="Filled star" />
          </div>
        </div>
      );

    case "Medium":
      return (
        <div className="difficulty__stars">
          <div className="difficulty__star">
            <img src={filledStar} alt="Filled star" />
          </div>
          <div className="difficulty__star">
            <img src={filledStar} alt="Filled star" />
          </div>
          <div className="difficulty__star">
            <img src={notFilledStar} alt="Filled star" />
          </div>
        </div>
      );
    default:
      return (
        <div className="difficulty__stars">
          <div className="difficulty__star">
            <img src={filledStar} alt="Filled star" />
          </div>
          <div className="difficulty__star">
            <img src={filledStar} alt="Filled star" />
          </div>
          <div className="difficulty__star">
            <img src={filledStar} alt="Filled star" />
          </div>
        </div>
      );
  }
};
