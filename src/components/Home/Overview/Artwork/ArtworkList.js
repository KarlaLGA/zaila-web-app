import React from "react";

import ArtworkItem from "components/Home/Overview/Artwork/ArtworkItem";

const ArtworkList = props => {
  const artists = props.artists;

  return (
    <div className="artwork-overview">
      <p className="header">List of artists:</p>
      <p>(All exhibitions)</p>
      {artists.map((artist, index) => (
        <ArtworkItem artist={artist} key={index} />
      ))}
    </div>
  );
};

export default ArtworkList;
