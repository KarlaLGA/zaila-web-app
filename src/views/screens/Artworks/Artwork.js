import React, { useState, useEffect } from "react";
import { get } from "services/zaila-api";
import SingleArtwork from "components/Artwork/SingleArtwork";

const Artwork = props => {
  let artworkId = props.match.params.artworkId;
  
  let endpoint = "artwork/"+artworkId;

  const artwork = {
    artwork: {
      title: "",
      artistName: "",
      media: "",
      year: "",
      imageURL: "",
      exhibitionId: 0,
      sensorId: 0,
      artworkDetails: []
    }

  }

  const [singleArtwork, setSingleArtwork] = useState(artwork);

  useEffect(() => {
    get(endpoint)
      .then(data => {
        setSingleArtwork(data);
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="artwork">
      <SingleArtwork singleArtwork={ singleArtwork } />
    </div>
  );
};

export default Artwork;
