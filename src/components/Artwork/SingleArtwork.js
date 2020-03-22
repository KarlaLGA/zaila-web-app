import React, { useState, useEffect } from "react";

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
  const [dropdown, setDropdown] = useState(true);
  const [languageCode, setLanguageCode] = useState({
    code: "en-US",
    text: "EN",
    icon: "/assets/icons/english.png",
    alt: "english icon"
  });

  const dropdownOptions = [
    {
      code: "en-US",
      text: "EN",
      icon: "/assets/icons/english.png",
      alt: "english icon"
    },
    {
      code: "fr-CA",
      text: "FR",
      icon: "/assets/icons/french.png",
      alt: "french icon"
    },
    {
      code: "es-ES",
      text: "ES",
      icon: "/assets/icons/spanish.png",
      alt: "spanish icon"
    },
    {
      code: "zh-CN",
      text: "CH",
      icon: "/assets/icons/chinese.png",
      alt: "chinese icon"
    }
  ];

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  const handleDescription = e => {
    let language = dropdownOptions.find(option => option.code === e.target.id);
    setLanguageCode(language);
  };

  useEffect(() => {
    let description = artworkDetails.find(
      artworkDetail => artworkDetail.languageCode === languageCode.code
    );

    if (description === undefined) {
      setSelectedDescription("No translation available for this language.");
    } else {
      setSelectedDescription(description.description);
    }
  }, [languageCode.code]);

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
                <div className="select">
                  <div className="dropdown" onClick={handleDropdown}>
                    <img
                      src={languageCode.icon}
                      alt={languageCode.alt}
                      className="language-icon"
                    />
                    {languageCode.text}
                    <span className="dropdown-icon">
                      <img src="/assets/icons/arrow.svg" alt="dropdown icon" />
                    </span>
                  </div>

                  {!dropdown ? (
                    <div className="dropdown active">
                      <ul className="languages">
                        {dropdownOptions.map(option => (
                          <div
                            className={
                              languageCode === option.code
                                ? "selected-language"
                                : "language"
                            }
                            id={option.code}
                            onClick={e => handleDescription(e)}
                            key={option.code}
                          >
                            <img
                              src={option.icon}
                              alt={option.alt}
                              className="language-icon"
                              id={option.code}
                              onClick={e => handleDescription(e)}
                            />
                            {option.text}
                          </div>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
                {/* <select
                  name="languages"
                  id="languages"
                  onChange={e => handleDescription(e)}
                >
                  <option value="en-US" className="language english">
                    English
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
                </select> */}
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
            <img src="/assets/icons/edit-border.svg" alt="edit icon" />
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
