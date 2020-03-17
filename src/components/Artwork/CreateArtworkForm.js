import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { create, get } from "../../services/zaila-api";
import UploadImage from "components/Artwork/UploadImage";
import Translate from "./TranslateArtwork/Translate";
import ListTranslation from "./TranslateArtwork/ListTranslation";
import ArtworkQRCode from "./ArtworkQRCode";

const CreateArtworkForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { image, artworkDetails } = useSelector(state => state.artwork);
  const exhibitions = useSelector(state => state.exhibition.exhibitionList);

  const newArtwork = {
    title: "",
    imageURL: "",
    artistName: "",
    media: "",
    year: "",
    exhibitionId: "123",
    sensorId: "",
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
    create("artwork", { artwork: artwork })
      .then(data => {
        history.push("/dashboard/artifacts");
        dispatch({ type: "EMPTY_IMAGE" });
      })
      .catch(error => {
        console.log(error);
      });

    setQrCode(true);
  };

  console.log(artwork);

  return (
    <div className="artwork-form form single-view">
      <div className="general-information">
        <div className="detail">
          <label htmlFor="title">Artifact Title</label>
          <input
            type="text"
            name="title"
            id="title"
            className="input"
            onChange={e =>
              setArtwork({
                ...artwork,
                title: e.target.value
              })
            }
          />
        </div>

        <div className="detail">
          <label htmlFor="artist-name">Artist</label>
          <input
            type="text"
            name="artist-name"
            id="artist-name"
            className="input"
            onChange={e =>
              setArtwork({
                ...artwork,
                artistName: e.target.value
              })
            }
          />
        </div>

        <div className="detail">
          <label htmlFor="media">Media</label>
          <input
            type="text"
            name="media"
            id="media"
            className="input"
            onChange={e =>
              setArtwork({
                ...artwork,
                media: e.target.value
              })
            }
          />
        </div>

        <div className="detail">
          <label htmlFor="year">Year</label>
          <input
            type="text"
            name="year"
            id="year"
            className="input"
            onChange={e =>
              setArtwork({
                ...artwork,
                year: e.target.value
              })
            }
          />
        </div>

        <div className="detail">
          <label htmlFor="size">Size (in inch)</label>
          <div className="options-detail">
            <input
              type="text"
              name="size"
              id="width"
              className="input"
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
              className="input"
              onChange={e =>
                setArtwork({
                  ...artwork,
                  height: e.target.value
                })
              }
            />
          </div>
        </div>
      </div>

      <div className="additional-information">
        <UploadImage />

        <div className="detail">
          <label htmlFor="exhibition">Exhibition name:</label>
          <select
            name="exhibition"
            id="exhibition"
            className="input"
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
        </div>

        <div className="detail">
          <label htmlFor="quest">Quest</label>
          <input
            type="text"
            name="quest"
            id="quest"
            className="input"
            onChange={e =>
              setArtwork({
                ...artwork,
                quest: e.target.value
              })
            }
          />
        </div>

        <div className="detail">
          <label htmlFor="sensor">Sensor ID</label>
          <select
            name="sensor"
            id="sensor"
            className="input"
            onChange={e => {
              setArtwork({
                ...artwork,
                sensorId: e.target.value
              });
            }}
          >
            {sensors
              .filter(({ sensor }) => sensor.status === "Available")
              .map(({ sensor }) => (
                <option value={sensor.sensorId} key={sensor.sensorId}>
                  {sensor.sensorId}
                </option>
              ))}
          </select>
        </div>
      </div>
      <div className="description-artwork">
        <ListTranslation />
        <Translate description={artworkDetails[0].description} />
      </div>

      <button onClick={handleArtwork} className="add">
        Save
      </button>
      {qrCode ? <ArtworkQRCode sensorId={artwork.sensorId} /> : <div />}
    </div>
  );
};

export default CreateArtworkForm;
