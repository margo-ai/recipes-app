import React from "react";
import image from "../../assets/main-image.png";

import "./filterBlock.scss";

import { Filters } from "../Filters";
import { RandomButton } from "../RandomButton";

export const FilterBlock = () => {
  return (
    <div className="filter">
      <div className="info">
        <div className="info__image">
          <img src={image} alt="Recipe image" />
        </div>
        <div className="info__text">
          В нашей жизни, когда время становится все более ценным ресурсом, задача планирования приема пищи становится
          все более сложной.
          <br />
          <br />
          Часто мы сталкиваемся с дилеммой: что приготовить на завтрак, обед или ужин? Каким образом мы можем легко и
          быстро определиться с выбором блюда и не тратить много времени на принятие этого решения?
          <br />
          <br />
          Наш сервис поможет: выбирайте параметры - и вперед!
        </div>
      </div>
      <Filters />

      <RandomButton />
    </div>
  );
};
