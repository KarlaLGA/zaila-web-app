import React, { useState } from "react";

import Moment from 'moment';
// import EditArtworkForm from "./EditArtworkForm";

const SingleExhibition = props => {

  let singleExhibition = props.singleExhibition;

  const start = new Moment(singleExhibition.exhibition.startDate);
  const end = new Moment(singleExhibition.exhibition.endDate);

   const startExhibition = start.format('LL');
   const endExhibition = end.format('LL');

  const [exhibitionEdit, setExhibitionEdit] = useState(false);

  const handleEdit = () => {
    setExhibitionEdit(true);
  };
  return (
    <div>
      {!exhibitionEdit ? (
        <div>

          <h2>Exhibition: {singleExhibition.exhibition.name}</h2>

          <img
            src={singleExhibition.exhibition.imageURL}
            alt="exhibition"
            style={{
              width: "200px"
            }}
          />

          <p>Duration:</p>
          <p>{ startExhibition } to { endExhibition }</p> 

          <p>Exhibition description: </p>
          <p>{singleExhibition.exhibition.description}</p>

          <p>Exhibition Category: {singleExhibition.exhibition.categoryId}</p>

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
