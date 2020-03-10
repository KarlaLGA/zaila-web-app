import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { get } from "services/zaila-api";

import SingleArtwork from "components/Artwork/SingleArtwork";
import EditArtworkForm from "components/Artwork/EditArtworkForm";

const Artwork = props => {
  let artworkId = props.match.params.artworkId;

  let edit = props.location.edit;

  let endpoint = "artwork/" + artworkId;

  const [singleArtwork, setSingleArtwork] = useState({});

  const exhibitions = useSelector(state => state.exhibition.exhibitionList);

  useEffect(() => {
    if (exhibitions.length !== 0) {
      get(endpoint)
        .then(data => {
          let exhibition = exhibitions.find(
            x => x.exhibition.exhibitionId === data.artwork.exhibitionId
          );
          let artwork = {
            ...data.artwork,
            exhibitionName: exhibition.exhibition.name
          };
          setSingleArtwork({ artwork });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [endpoint, exhibitions]);

  const handleEdit = () => {
    if (Object.values(singleArtwork).length >= 1 && edit === true) {
      return <EditArtworkForm artwork={singleArtwork.artwork} />;
    } else if (Object.values(singleArtwork).length >= 1) {
      return <SingleArtwork singleArtwork={singleArtwork} />;
    } else {
      return <></>;
    }
  };

  return (
    <div className="artwork">
      <div className="section-header">
        <h1>Artwork Information</h1>
      </div>
      {handleEdit()}
    </div>
  );
};

export default Artwork;
