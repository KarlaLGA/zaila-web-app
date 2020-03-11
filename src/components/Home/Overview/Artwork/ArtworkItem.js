import React from "react";

const ArtworkItem = props => {
  const { artist } = props.artwork;
  return (
    <div>
      <p>{artist}</p>
    </div>
  );
};

export default ArtworkItem;
