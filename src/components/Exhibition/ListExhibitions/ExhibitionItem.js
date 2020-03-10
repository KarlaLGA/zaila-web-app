import React from "react";
import { Link } from "react-router-dom";

const ExhibitionItem = props => {
  let { name, startDate, endDate, imageURL, exhibitionId } = props.exhibition;

  return (
    <div className="list-item">
      <div className="exhibition-item">
        <div className="image">
          <img src={imageURL} alt="exhibition" style={{ width: "200px" }} />
        </div>

        <div className="information">
          <p>Exhibition Name: {name}</p>
          <p>
            Duration: {startDate} - {endDate}
          </p>
        </div>

        <div className="icons">
          <Link
            to={{
              pathname: `/dashboard/exhibitions/${exhibitionId}`,
              edit: true
            }}
          >
            Edit
          </Link>
          <Link to={"/dashboard/exhibitions/" + exhibitionId}>View</Link>
        </div>
      </div>

      <div className="spacer"></div>
    </div>
  );
};

export default ExhibitionItem;
