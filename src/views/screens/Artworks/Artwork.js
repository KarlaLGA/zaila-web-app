import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { get } from "services/zaila-api";

import SingleArtwork from "components/Artwork/SingleArtwork";

const Artwork = props => {
  let artworkId = props.match.params.artworkId;

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

  return (
    <div className="artwork">
      <div className="section-header">
        <h2>Artwork Information</h2>
      </div>
      {Object.values(singleArtwork).length >= 1 ? (
        <SingleArtwork singleArtwork={singleArtwork} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Artwork;
