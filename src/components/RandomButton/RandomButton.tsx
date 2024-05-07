import React from "react";

import "./randomButton.scss";

export const RandomButton = () => {
  return (
    <div className="random-button">
      <div className="random-button__title">А еще можно попробовать на вкус удачу</div>
      <button className="random-button__button">Мне повезёт!</button>
    </div>
  );
};
