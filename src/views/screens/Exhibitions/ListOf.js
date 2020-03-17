import React from "react";
import { Link } from "react-router-dom";

import ListExhibition from "components/Exhibition/ListExhibitions/ListExhibition";
import ExhibitionHeader from "components/Exhibition/ListExhibitions/ExhibitionHeader";

const ListOf = () => {
  return (
    <div className="list exhibition-list">
      <div className="section-header section-header-exhibitions">
        <h1>Exhibitions</h1>
      </div>
      <ExhibitionHeader />
      <ListExhibition />

      <Link to="/dashboard/exhibitions/create" className="add">
        <img src="/icons/add.svg" alt="add icon" />
        Add
      </Link>
    </div>
  );
};

export default ListOf;
