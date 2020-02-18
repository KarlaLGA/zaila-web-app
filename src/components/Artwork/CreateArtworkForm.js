import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { create, get } from "services/zaila-api";
import UploadImage from "./UploadImage";
import Translate from "./TranslateArtwork/Translate";
import ListTranslation from "./TranslateArtwork/ListTranslation";
import ArtworkQRCode from "./ArtworkQRCode";

const ArtworkForm = () => {
  const { image, artworkDetails } = useSelector(state => state.artwork);

  const newArtwork = {
    title: "",
    imageURL: {},
    artistName: "",
    media: "",
    year: "",
    exhibitionId: "123",
    sensorId: "n133",
    artworkDetails: []
  };

  const [artwork, setArtwork] = useState(newArtwork);

  const [qrCode, setQrCode] = useState(false);

  const [sensors, setSensors] = useState([]);

  const dispatch = useDispatch();

  const handleDescription = e => {
    let inputDescription = e.target.value;
    dispatch({ type: "SET_DESCRIPTION", payload: inputDescription });
  };

  useEffect(() => {
    setArtwork({
      ...artwork,
      imageURL: image,
      artworkDetails: artworkDetails
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [image, artworkDetails]);

  useEffect(() => {
    get("sensor")
      .then(data => {
        setSensors(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleArtwork = () => {
    console.log(artwork);

    create("artwork", { artwork: artwork })
      .then(data => {
        console.log(`Create artwork from ${data}`);
      })
      .catch(error => {
        console.log(error);
      });

    setQrCode(true);
  };

  return (
    <div className="artwork-form">
      <h2>Create Artwork</h2>
      <label htmlFor="title">
        Name of Artwork
        <input
          type="text"
          name="title"
          id="title"
          onChange={e =>
            setArtwork({
              ...artwork,
              title: e.target.value
            })
          }
        />
      </label>
      <label htmlFor="artist-name">
        Artist
        <input
          type="text"
          name="artist-name"
          id="artist-name"
          onChange={e =>
            setArtwork({
              ...artwork,
              artistName: e.target.value
            })
          }
        />
      </label>
      <label htmlFor="media">
        Media
        <input
          type="text"
          name="media"
          id="media"
          onChange={e =>
            setArtwork({
              ...artwork,
              media: e.target.value
            })
          }
        />
      </label>
      <label htmlFor="year">
        Year finished
        <input
          type="text"
          name="year"
          id="year"
          onChange={e =>
            setArtwork({
              ...artwork,
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
          onChange={e =>
            setArtwork({
              ...artwork,
              exhibitionId: e.target.value
            })
          }
        >
          <option value="123">Egypt</option>
          <option value="124">Renaissance</option>
          <option value="125">Americana</option>
          <option value="126">Latin</option>
        </select>
      </label>
      <label htmlFor="sensor">
        Linked to Sensor:
        <select
          name="sensor"
          id="sensor"
          onChange={e =>
            setArtwork({
              ...artwork,
              sensorId: e.target.value
            })
          }
        >
          {sensors
            .filter(({ sensor }) => sensor.status === "Available")
            .map(({ sensor }) => (
              <option value={sensor.sensorId} key={sensor.sensorId}>
                {sensor.sensorId}
              </option>
            ))}
        </select>
      </label>
      <UploadImage />
      <label htmlFor="description" />
      Description of Artwork
      <textarea
        name="description"
        id="description"
        cols="30"
        rows="10"
        onChange={handleDescription}
      ></textarea>
      {artworkDetails.length >= 1 ? (
        <div>
          <Translate description={artworkDetails[0].description} />
          <ListTranslation />
        </div>
      ) : (
        <div></div>
      )}
      <button onClick={handleArtwork}>Save Artwork</button>
      {qrCode ? <ArtworkQRCode sensorId={artwork.sensorId} /> : <div />}
    </div>
  );
};

export default ArtworkForm;
