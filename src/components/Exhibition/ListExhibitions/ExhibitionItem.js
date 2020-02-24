import React from "react";
import { Link } from "react-router-dom";

import Moment from 'moment';

const ExhibitionItem = props => {
  let { name, startDate, endDate, imageURL, exhibitionId } = props.exhibition;

  const start = new Moment(startDate);
  const end = new Moment(endDate);

   const startExhibition = start.format('LL');
   const endExhibition = end.format('LL');

  return (
    <div className="exhibition-item">
      <Link to={"/dashboard/exhibitions/" + exhibitionId}>
        <h2>Exhibition Name: {name}</h2>

        <p>Duration: { startExhibition } - { endExhibition }</p>

        <img src={imageURL} alt="exhibition" style={{ width: "200px" }} />

        <p>View</p>

      </Link>
    </div>
  );
};

export default ExhibitionItem;
