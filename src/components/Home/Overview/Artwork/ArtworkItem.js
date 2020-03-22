import React from "react";

const ArtworkItem = props => {
  const { artist } = props.artist;

  return (
    <div>
      <p>{artist}</p>
    </div>
  );
};

export default ArtworkItem;
