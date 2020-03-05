import React, { useState } from "react";

import Moment from "moment";
// import EditArtworkForm from "./EditArtworkForm";

const SingleExhibition = props => {
  let singleExhibition = props.singleExhibition.exhibition;

  console.log(singleExhibition);

  const start = new Moment(singleExhibition.startDate);
  const end = new Moment(singleExhibition.endDate);

  const startExhibition = start.format("LL");
  const endExhibition = end.format("LL");

  const [exhibitionEdit, setExhibitionEdit] = useState(false);

  const handleEdit = () => {
    setExhibitionEdit(true);
  };
  return (
    <div>
      {!exhibitionEdit ? (
        <div>
          <h2>Exhibition: {singleExhibition.name}</h2>

          <img
            src={singleExhibition.imageURL}
            alt="exhibition"
            style={{
              width: "200px"
            }}
          />

          <p>Duration:</p>
          <p>
            {startExhibition} to {endExhibition}
          </p>

          <p>Exhibition description: </p>
          <p>{singleExhibition.description}</p>

          <p>Exhibition Category: {singleExhibition.categoryId}</p>

          <button onClick={handleEdit}>Edit</button>
        </div>
      ) : (
        <p>Edit exhibition</p>
      )}

      {/* <EditArtworkForm artwork={singleArtwork.artwork} /> */}
      {/* The code above goes where the text to edit is */}
    </div>
  );
};

export default SingleExhibition;
