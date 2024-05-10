import React, { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

import "./PageHeader.scss";

import arrowBack from "../../assets/arrow-back.svg";

type Props = {
  recipeName?: string;
};

export const PageHeader = ({ recipeName }: Props) => {
  const navigate = useNavigate();

  return (
    <>
      {!!recipeName ? (
        <header className="header">
          <button className="header__backButton" onClick={() => navigate(-1)}>
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