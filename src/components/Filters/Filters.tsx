import React, { useState } from "react";
import { Select } from "../ui/Select";

import "./filters.scss";
import { RadioBlock } from "../RadioBlock";

export const Filters = () => {
  return (
    <div className="filters">
      <Select
        label="Кухня: "
        options={[
          { label: "Все страны и регионы", value: "Все страны и регионы" },
          { label: "Европейская", value: "Европейская" },
        ]}
        value="Все страны и регионы"
        onChange={() => console.log("ok")}
      />
      <Select
        label="Тип блюда:"
        options={[
          { label: "Все типы", value: "Все типы" },
          { label: "Европейская", value: "Европейская" },
        ]}
        value="Все типы"
        onChange={() => console.log("ok")}
      />
      <RadioBlock />
      <button className="reset-button disabled">Сбросить все фильтры</button>
    </div>
  );
};
