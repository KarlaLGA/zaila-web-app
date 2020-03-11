import React from "react";

import ArtworkItem from "components/Home/Overview/Artwork/ArtworkItem";

const ArtworkList = props => {
  const data = props.artworks;
  return (
    <div className="artwork-overview">
      <p className="overview-header">List of artists:</p>
      <p>(All exhibitions)</p>
      {data.map((artwork, index) => (
        <ArtworkItem artwork={artwork} key={index} />
      ))}
    </div>
  );
};

export default ArtworkList;
