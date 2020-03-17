import React, { useState } from "react";

import ArtworkQRCode from "./ArtworkQRCode";

import EditArtworkForm from "./EditArtworkForm";

const SingleArtwork = props => {
  let singleArtwork = props.singleArtwork;

  let { artworkDetails } = singleArtwork.artwork;

  let descriptionEnglish = artworkDetails.find(
    artworkDetail => artworkDetail.languageCode === "en-US"
  );

  const [artworkEdit, setArtworkEdit] = useState(false);
  const [selectedDescription, setSelectedDescription] = useState(
    descriptionEnglish.description
  );

  const handleDescription = e => {
    let language = e.target.value;
    let description = artworkDetails.find(
      artworkDetail => artworkDetail.languageCode === language
    );

    if (description === undefined) {
      setSelectedDescription("No translation available for this language.");
    } else {
      setSelectedDescription(description.description);
    }
  };

  const handleEdit = () => {
    setArtworkEdit(true);
  };
  return (
    <div>
      {!artworkEdit ? (
        <div className="artwork-view single-view">
          <div className="general-information">
            <div className="detail">
              <p>Artifact Title</p>
              <p className="information">{singleArtwork.artwork.title}</p>
            </div>

            <div className="detail">
              <p>Artist</p>
              <p className="information">{singleArtwork.artwork.artistName}</p>
            </div>

            <div className="detail">
              <p>Media</p>
              <p className="information">{singleArtwork.artwork.media}</p>
            </div>

            <div className="detail">
              <p>Year</p>
              <p className="information">{singleArtwork.artwork.year}</p>
            </div>

            <div className="detail">
              <p>Size (in inches)</p>
              <p className="information">
                {singleArtwork.artwork.width} x {singleArtwork.artwork.height}
              </p>
            </div>

            <div className="description">
              <div className="options-detail">
                <p>Artifact Description</p>
                <select
                  name="languages"
                  id="languages"
                  onChange={e => handleDescription(e)}
                >
                  <option value="en-US" className="language english">
                    <span role="img" aria-label="english flag">
                      🤣
                    </span>
                    🇨🇦
                  </option>
                  <option value="fr-CA" className="language french">
                    French
                  </option>
                  <option value="es-ES" className="language spanish">
                    Spanish
                  </option>
                  <option value="zh-CN" className="language chinese">
                    Chinese
                  </option>
                </select>
              </div>

              <p>{selectedDescription}</p>
            </div>
          </div>

          <div className="additional-information">
            <div className="image">
              <img src={singleArtwork.artwork.imageURL} alt="artwork" />
            </div>

            <div className="detail">
              <p>Exhibition Name</p>
              <p className="information">
                {singleArtwork.artwork.exhibitionName}
              </p>
            </div>

            <div className="detail">
              <p>Quest Name</p>
              <p className="information">tbd</p>
            </div>

            <div className="detail">
              <p>Sensor ID</p>
              <div className="options-detail">
                <p className="information">{singleArtwork.artwork.sensorId}</p>

                <ArtworkQRCode sensorId={singleArtwork.artwork.sensorId} />
              </div>
            </div>
          </div>

          <div onClick={handleEdit} className="add">
            <img src="/icons/edit-border.svg" alt="edit icon" />
            Edit
          </div>
        </div>
      ) : (
        <EditArtworkForm artwork={singleArtwork.artwork} />
      )}
    </div>
  );
};

export default SingleArtwork;
