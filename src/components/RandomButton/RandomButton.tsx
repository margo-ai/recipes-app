import React from "react";

import "./randomButton.scss";

type Props = {
  disabled?: boolean;
};

export const RandomButton = ({ disabled = false }: Props) => {
  return (
    <div className={`random-button ${disabled ? "disabled" : ""}`}>
      <div className="random-button__title">А еще можно попробовать на вкус удачу</div>
      <button className="random-button__button">Мне повезёт!</button>
    </div>
  );
};
