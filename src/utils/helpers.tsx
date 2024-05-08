import React from "react";

import arrowLeft from "../assets/arrow-left.svg";
import arrowRight from "../assets/arrow-right.svg";

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
          <img src={arrowRight} />
        </a>
      );
    case "prev":
      return (
        <a className="page-link">
          <img src={arrowLeft} />
        </a>
      );
  }
};
