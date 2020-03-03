import React from "react";
import { Link } from "react-router-dom";

import ListArtwork from "components/Artwork/ListArtworks/ListArtwork";
import SearchBar from "components/Artwork/ListArtworks/SearchBar";

const ListOf = () => {
  return (
    <div className="list artwork-list">
      <div className="section-header section-header-artworks">
        <h2>Artworks</h2>
        <SearchBar />
      </div>
      <ListArtwork />

      <Link to="/dashboard/artworks/create" className="add">
        Add
      </Link>
    </div>
  );
};

export default ListOf;
