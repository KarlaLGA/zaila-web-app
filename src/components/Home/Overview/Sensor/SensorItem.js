import React from "react";

const SensorItem = props => {
  const exhibition = props.exhibition;

  return (
    <div className="sensor-overview">
      <p className="header">{exhibition.exhibitionName}</p>
      <p>NFC: {exhibition.artworksTotal}</p>
    </div>
  );
};

export default SensorItem;
