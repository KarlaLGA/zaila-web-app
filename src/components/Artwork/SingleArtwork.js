import React, { useState } from "react";

import EditArtworkForm from "./EditArtworkForm";
import ArtworkQRCode from "./ArtworkQRCode";
import DeleteArtwork from "./DeleteArtwork/DeleteArtwork";

const SingleArtwork = props => {

  let singleArtwork = props.singleArtwork;
  console.log(singleArtwork);

  const [artworkEdit, setArtworkEdit] = useState(false);

  const handleEdit = () => {
    setArtworkEdit(true);
  };
  return (
    <div>
      {!artworkEdit ? (
        <div>
          <p>Single artwork</p>

          <h2>Artwork: {singleArtwork.artwork.title}</h2>

          <img
            src={singleArtwork.artwork.imageURL}
            alt="artwork"
            style={{
              width: "200px"
            }}
          />

          <h3>Artist: {singleArtwork.artwork.artistName}</h3>

          <p>Exhibition: {singleArtwork.artwork.exhibitionId}</p>
          <p>Sensor: {singleArtwork.artwork.sensorId}</p>
          <p>Media: {singleArtwork.artwork.media}</p>
          <p>Year: {singleArtwork.artwork.year}</p>

          {singleArtwork.artwork.artworkDetails.map(artworkDetail => (
            <p key={artworkDetail.description}>
              Description: {artworkDetail.description}
              <span>Language: {artworkDetail.languageCode}</span>
            </p>
          ))}

          <ArtworkQRCode sensorId={singleArtwork.artwork.sensorId} />

          <button onClick={handleEdit}>Edit</button>
        </div>
      ) : (
        <EditArtworkForm artwork={singleArtwork.artwork} />
      )}

      <DeleteArtwork />
    </div>
  );
};

export default SingleArtwork;
