import React, { useState, useEffect } from "react";
import { get } from "services/zaila-api";

import SingleExhibition from "components/Exhibition/SingleExhibition";
import EditExhibitionForm from "components/Exhibition/EditExhibitionForm";

const Exhibition = props => {
  let exhibitionId = props.match.params.exhibitionId;

  let edit = props.location.edit;

  let endpoint = "exhibition/" + exhibitionId;

  const [singleExhibition, setSingleExhibition] = useState({});

  useEffect(() => {
    get(endpoint)
      .then(data => {
        setSingleExhibition(data);
      })
      .catch(error => {
        console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEdit = () => {
    if (Object.values(singleExhibition).length >= 1 && edit === true) {
      return <EditExhibitionForm exhibition={singleExhibition.exhibition} />;
    } else if (Object.values(singleExhibition).length >= 1) {
      return <SingleExhibition singleExhibition={singleExhibition} />;
    } else {
      return <></>;
    }
  };
  return (
    <div className="exhibition">
      <div className="section-header">
        <h2>Exhibition Information</h2>
      </div>
      {handleEdit()}
    </div>
  );
};

export default Exhibition;
