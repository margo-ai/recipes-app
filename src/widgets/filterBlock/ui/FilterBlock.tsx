import React from "react";

import image from "../../../shared/assets/main-image.png";

import { SetFilters } from "../../../features/setFilters";
import { RandomButton } from "../../../entities/randomButton";

import "./filterBlock.scss";

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
      <SetFilters />

      <RandomButton />
    </div>
  );
};
