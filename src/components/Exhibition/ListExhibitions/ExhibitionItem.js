import React from "react";
import { Link } from "react-router-dom";

const ExhibitionItem = props => {
  let { name, startDate, endDate, imageURL, exhibitionId } = props.exhibition;

  return (
    <div className="exhibition-item">
      <Link to={"/dashboard/exhibitions/" + exhibitionId}>
        <h2>Exhibition Name: {name}</h2>

        <p>Duration: { startDate } - { endDate }</p>

        <img src={imageURL} alt="exhibition" style={{ width: "200px" }} />

        <p>View</p>

      </Link>
    </div>
  );
};

export default ExhibitionItem;
