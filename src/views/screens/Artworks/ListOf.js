import React from "react";
import { Link } from "react-router-dom";

import ListArtwork from "components/Artwork/ListArtworks/ListArtwork";

const ListOf = () => {
  return (
    <div className="list artwork-list">
      <ListArtwork />

      <Link to="/dashboard/artworks/create" className="add">
        Add
      </Link>
    </div>
  );
};

export default ListOf;
