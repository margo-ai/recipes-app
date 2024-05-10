import React from "react";

import arrowPrev from "../assets/arrow-left.svg";
import arrowNext from "../assets/arrow-right.svg";

type TPaginationItems = "page" | "prev" | "next" | "jump-prev" | "jump-next";

export const renderPaginationItems = (page: number, type: TPaginationItems) => {
  switch (type) {
    case "page":
      return <a className="page-link">{page}</a>;
    case "jump-prev":
    case "jump-next":
      return <a>•••</a>;
    case "next":
      return (
        <a className="page-link">
          <img src={arrowNext} alt="Prev arrow icon" />
        </a>
      );
    case "prev":
      return (
        <a className="page-link">
          <img src={arrowPrev} alt="Next arrow icon" />
        </a>
      );
  }
};
