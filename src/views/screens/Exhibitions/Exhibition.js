import React, { useState, useEffect } from "react";
import { get } from "services/zaila-api";

import SingleExhibition from "components/Exhibition/SingleExhibition";
import EditExhibitionForm from "components/Exhibition/EditExhibitionForm";
import ListArtwork from "components/Exhibition/ListArtworks/ListArtwork";

const Exhibition = props => {
  let exhibitionId = props.match.params.exhibitionId;

  let edit = props.location.edit;

  let endpoint = "exhibition/" + exhibitionId;
  let endpointArtworks = endpoint + "/artwork";

  const [singleExhibition, setSingleExhibition] = useState({});
  const [artworksRelated, setArtworksRelated] = useState([]);

  useEffect(() => {
    get(endpoint)
      .then(data => {
        setSingleExhibition(data);
      })
      .catch(error => {
        console.log(error);
      });

    get(endpointArtworks)
      .then(data => {
        setArtworksRelated(data);
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
      return (
        <div className="exhibition-detail">
          <SingleExhibition singleExhibition={singleExhibition} />
          <ListArtwork artworks={artworksRelated} />
        </div>
      );
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
