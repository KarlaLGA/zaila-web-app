import React, { useState } from "react";
import EditArtworkForm from "./EditArtworkForm";
import ArtworkQRCode from "./ArtworkQRCode";

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
    console.log(artworkDetails);
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
              <p>Artwork Title</p>
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
                {singleArtwork.artwork.width}x {singleArtwork.artwork.height}
              </p>
            </div>

            <div className="description">
              <div className="options-detail">
                <p>Artwork Description</p>
                <select
                  name="languages"
                  id="languages"
                  onChange={e => handleDescription(e)}
                >
                  <option value="en-US">English</option>
                  <option value="fr-CA">French</option>
                  <option value="es-ES">Spanish</option>
                  <option value="zh-CN">Chinese</option>
                </select>
              </div>

              <p>{selectedDescription}</p>
            </div>
          </div>

          <div className="additional-information">
            <div className="image">
              <img
                src={singleArtwork.artwork.imageURL}
                alt="artwork"
                style={{
                  width: "100%"
                }}
              />
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

          <button onClick={handleEdit} className="add">
            Edit
          </button>
        </div>
      ) : (
        <EditArtworkForm artwork={singleArtwork.artwork} />
      )}
    </div>
  );
};

export default SingleArtwork;
