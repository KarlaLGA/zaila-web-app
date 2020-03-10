import React from "react";

const ExhibitionItem = props => {
  const { exhibitionName, duration, imageURL } = props.exhibition;
  return (
    <div>
      <img src={imageURL} alt="exhibition" style={{ "max-width": "100%" }} />
      <p>{exhibitionName}</p>
      <p>{duration}</p>
    </div>
  );
};

export default ExhibitionItem;
