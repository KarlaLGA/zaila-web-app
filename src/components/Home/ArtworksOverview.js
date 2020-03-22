import React from "react";

import ArtworkList from "components/Home/Overview/Artwork/ArtworkList";

const ArtworksOverview = props => {
  const artists = props.artists;
  const total = props.total;

  return (
    <div className="overview-item">
      <h2>Artifacts</h2>

      <div className="total">
        <p>
          Artifacts Displayed: <span className="number">{total}</span>
        </p>
      </div>

      <ArtworkList artists={artists} total={total} />
    </div>
  );
};

export default ArtworksOverview;
