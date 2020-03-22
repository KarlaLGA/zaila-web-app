import React from "react";

const ExhibitionItem = props => {
  const { name, duration } = props.exhibition;
  return (
    <div className="exhibition-overview">
      <p className="header">{name}</p>
      <p>{duration}</p>
    </div>
  );
};

export default ExhibitionItem;
