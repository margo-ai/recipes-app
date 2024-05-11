import React from "react";
import { useNavigate } from "react-router-dom";

import arrowBack from "../../assets/arrow-back.svg";

import "./PageHeader.scss";

type Props = {
  recipeName?: string;
};

export const PageHeader = ({ recipeName }: Props) => {
  const navigate = useNavigate();

  return (
    <>
      {!!recipeName ? (
        <header className="header">
          <button className="header__backButton" onClick={() => navigate("/")}>
            <img src={arrowBack} alt="Back button icon" />
          </button>
          <h1>{recipeName}</h1>
        </header>
      ) : (
        <header className="header">
          <h1>Сборник рецептов из разных стран мира</h1>
        </header>
      )}
    </>
  );
};
