import React from "react";
import { Link } from "react-router-dom";

import ListArtwork from "components/Artwork/ListArtworks/ListArtwork";
import SearchBar from "components/Artwork/ListArtworks/SearchBar";

const ListOf = () => {
  return (
    <div className="list">
      <div className="section-header section-header-artworks">
        <h1>Artifacts</h1>
        <SearchBar />
      </div>
      <ListArtwork />

      <Link to="/dashboard/artifacts/create" className="add">
        <img src="/assets/icons/add.svg" alt="add icon" />
        Add
      </Link>
    </div>
  );
};

export default ListOf;
