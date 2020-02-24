import React, { useState, useEffect } from "react";
import { get } from "services/zaila-api";
import SingleExhibition from "components/Exhibition/SingleExhibition";

const Exhibition = props => {
  let exhibitionId = props.match.params.exhibitionId;
  
  let endpoint = "exhibition/"+exhibitionId;

  const [singleExhibition, setSingleExhibition] = useState({});

  useEffect(() => {
    get(endpoint)
      .then(data => {
        setSingleExhibition(data);
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="artwork">
        {Object.values(singleExhibition).length >=1 ? (
            <SingleExhibition singleExhibition={ singleExhibition } />
        ) : (
            <></>
        )}
      
    </div>
  );
};

export default Exhibition;
