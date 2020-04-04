import React from "react";
import ArtworkItem from "./ArtworkItem";

const ListArtwork = props => {
  const artworks = props.artworks;
  console.log(artworks);

  return (
    <div className="list-artwork">
      {artworks.map(({ artwork }) => (
        <ArtworkItem key={artwork.artworkId} artwork={artwork} />
      ))}
    </div>
  );
};

export default ListArtwork;
