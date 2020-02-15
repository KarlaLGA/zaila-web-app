import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { update, get } from "services/zaila-api";
import UploadImage from "./UploadImage";
import Translate from "./TranslateArtwork/Translate";
import ListTranslation from "./TranslateArtwork/ListTranslation";
import ArtworkQRCode from "./ArtworkQRCode";

// TO UPDATE THE IMAGE, SHOW THE CURRENT IMAGE AND ADD A BUTTON TO UPDATE/ REWRITE THE FILE
const EditArtworkForm = props => {
  const dispatch = useDispatch();

  const [editArtwork, setEditArtwork] = useState(props.artwork);

  const {
    title,
    image,
    artistName,
    media,
    year,
    exhibitionId,
    sensorId,
    artworkDetails
  } = editArtwork;

  const artworkDetailsTranslated = useSelector(
    state => state.artwork.artworkDetails
  );

  //console.log(artworkDetailsTranslated);

  const description = artworkDetails[0].description;

  const [qrCode, setQrCode] = useState(false);

  const [sensors, setSensors] = useState([]);

  const handleDescription = e => {
    let inputDescription = e.target.value;
    dispatch({ type: "SET_DESCRIPTION", payload: inputDescription });
  };

  useEffect(() => {
    get("sensor")
      .then(data => {
        setSensors(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (artworkDetailsTranslated.length !== 0) {
      setEditArtwork({
        ...editArtwork,
        image: image,
        artworkDetails: artworkDetailsTranslated
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [image, artworkDetailsTranslated]);

  const handleArtwork = () => {
    console.log(editArtwork);

    update("artwork", editArtwork)
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });

    setQrCode(true);
  };

  const exhibitionList = [
    // REPLACE WITH API CALL

    { exhibitionId: 123, exhibitionName: "Egypt" },
    { exhibitionId: 124, exhibitionName: "Renaissance" },
    { exhibitionId: 125, exhibitionName: "Americana" },
    { exhibitionId: 126, exhibitionName: "Latin" }
  ];

  //console.log(description);

  const renderExhibitionList = exhibitionList.map(exhibition => {
    return (
      <option value={exhibition.exhibitionId} key={exhibition.exhibitionId}>
        {exhibition.exhibitionName}
      </option>
    );
  });

  return (
    <div className="artwork-form">
      <h2>Edit Artwork</h2>
      <label htmlFor="title">
        Name of Artwork
        <input
          value={title}
          type="text"
          name="title"
          id="title"
          onChange={e =>
            setEditArtwork({
              ...editArtwork,
              title: e.target.value
            })
          }
        />
      </label>
      <label htmlFor="artist-name">
        Artist
        <input
          value={artistName}
          type="text"
          name="artist-name"
          id="artist-name"
          onChange={e =>
            setEditArtwork({
              ...editArtwork,
              artistName: e.target.value
            })
          }
        />
      </label>
      <label htmlFor="media">
        Media
        <input
          value={media}
          type="text"
          name="media"
          id="media"
          onChange={e =>
            setEditArtwork({
              ...editArtwork,
              media: e.target.value
            })
          }
        />
      </label>
      <label htmlFor="year">
        Year finished
        <input
          value={year}
          type="text"
          name="year"
          id="year"
          onChange={e =>
            setEditArtwork({
              ...editArtwork,
              year: e.target.value
            })
          }
        />
      </label>
      <label htmlFor="exhibition">
        Part of Exhibition:
        <select
          name="exhibition"
          id="exhibition"
          value={exhibitionId}
          onChange={e =>
            setEditArtwork({
              ...editArtwork,
              exhibitionId: e.target.value
            })
          }
        >
          {renderExhibitionList}
        </select>
      </label>
      <label htmlFor="sensor">
        Linked to Sensor:
        <select
          name="sensor"
          id="sensor"
          value={sensorId}
          onChange={e =>
            setEditArtwork({
              ...editArtwork,
              sensorId: e.target.value
            })
          }
        >
          <option value={sensorId} key={sensorId}>
            {sensorId}
          </option>
          {sensors
            .filter(({ sensor }) => sensor.status === "Available")
            .map(({ sensor }) => {
              return (
                <option value={sensor.sensorId} key={sensor.sensorId}>
                  {sensor.sensorId}
                </option>
              );
            })}
        </select>
      </label>
      <UploadImage />
      <label htmlFor="description" />
      Description of Artwork
      <textarea
        value={description}
        name="description"
        id="description"
        cols="30"
        rows="10"
        onChange={handleDescription}
      ></textarea>
      <Translate description={description} />
      <ListTranslation />
      <button onClick={handleArtwork}>Save Artwork</button>
      {qrCode ? <ArtworkQRCode sensorId={editArtwork.sensorId} /> : <div />}
    </div>
  );
};

export default EditArtworkForm;
