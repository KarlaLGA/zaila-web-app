import React from "react";
import ArtworkItem from "./ArtworkItem";

const ListArtwork = props => {
  const artworksRelated = props.artworks;

  return (
    <div className="artworks-related list-artwork">
      <p>Artwork List</p>
      {artworksRelated.map(({ artwork }) => (
        <ArtworkItem key={artwork.artworkId} artwork={artwork} />
      ))}
    </div>
  );
};

export default ListArtwork;
