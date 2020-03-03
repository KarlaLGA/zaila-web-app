import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { create, get } from "services/zaila-api";
import UploadImage from "components/Artwork/UploadImage";
import Translate from "./TranslateArtwork/Translate";
import ListTranslation from "./TranslateArtwork/ListTranslation";
import ArtworkQRCode from "./ArtworkQRCode";

const CreateArtworkForm = () => {
  const { image, artworkDetails } = useSelector(state => state.artwork);
  const exhibitions = useSelector(state => state.exhibition.exhibitionList);

  const newArtwork = {
    title: "",
    imageURL: {},
    artistName: "",
    media: "",
    year: "",
    exhibitionId: "123",
    sensorId: "n133",
    artworkDetails: [],
    width: 0,
    height: 0,
    quest: ""
  };

  const [artwork, setArtwork] = useState(newArtwork);

  const [qrCode, setQrCode] = useState(false);

  const [sensors, setSensors] = useState([]);

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
    <div className="artwork-form single-view">
      <div className="general-information">
        <label htmlFor="title">
          Artwork Title
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
          Year
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
        <label htmlFor="size">Size (in inch)</label>
        <div className="options-detail">
          <input
            type="text"
            name="size"
            id="width"
            onChange={e =>
              setArtwork({
                ...artwork,
                width: e.target.value
              })
            }
          />
          X
          <input
            type="text"
            name="height"
            id="height"
            onChange={e =>
              setArtwork({
                ...artwork,
                height: e.target.value
              })
            }
          />
        </div>
      </div>
      <div className="additional-information">
        <UploadImage />

        <label htmlFor="exhibition">
          Exhibition name:
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
            {exhibitions.map(exhibition => (
              <option
                value={exhibition.exhibition.exhibitionId}
                key={exhibition.exhibition.exhibitionId}
              >
                {exhibition.exhibition.name}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="quest">
          Quest
          <input
            type="text"
            name="quest"
            id="quest"
            onChange={e =>
              setArtwork({
                ...artwork,
                quest: e.target.value
              })
            }
          />
        </label>

        <label htmlFor="sensor">
          Sensor ID
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
      </div>
      <div className="description-artwork">
        <ListTranslation />
        <Translate description={artworkDetails[0].description} />
      </div>

      <button onClick={handleArtwork} className="add">
        Save Artwork
      </button>
      {qrCode ? <ArtworkQRCode sensorId={artwork.sensorId} /> : <div />}
    </div>
  );
};

export default CreateArtworkForm;
