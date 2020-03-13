import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { update, get } from "services/zaila-api";
import UploadImage from "components/Artwork/UploadImage";
import Translate from "./TranslateArtwork/Translate";
import ListTranslation from "./TranslateArtwork/ListTranslation";
import ArtworkQRCode from "./ArtworkQRCode";

const EditArtworkForm = props => {
  const dispatch = useDispatch();

  const [editArtwork, setEditArtwork] = useState(props.artwork);

  console.log(editArtwork);

  const {
    title,
    imageURL,
    artistName,
    media,
    year,
    exhibitionId,
    sensorId,
    artworkDetails,
    width,
    height,
    quest
  } = editArtwork;

  const artworkDetailsTranslated = useSelector(
    state => state.artwork.artworkDetails
  );
  const exhibitions = useSelector(state => state.exhibition.exhibitionList);

  let image = useSelector(state => state.artwork.image) || imageURL;

  const description = artworkDetails[0].description;

  const [qrCode, setQrCode] = useState(false);

  const [sensors, setSensors] = useState([]);

  useEffect(() => {
    dispatch({ type: "SET_DESCRIPTION", payload: description });
    get("sensor")
      .then(data => {
        setSensors(data);
      })
      .catch(error => {
        console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [description]);

  useEffect(() => {
    if (artworkDetailsTranslated.length !== 0) {
      setEditArtwork({
        ...editArtwork,
        artworkDetails: artworkDetailsTranslated
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [artworkDetailsTranslated]);

  useEffect(() => {
    setEditArtwork({
      ...editArtwork,
      imageURL: image
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [image]);

  const handleArtwork = () => {
    update(`artwork/${editArtwork.artworkId}`, { artwork: editArtwork })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });

    setQrCode(true);
  };

  return (
    <div className="artwork-form form single-view">
      <div className="general-information">
        <div className="detail">
          <label htmlFor="title">Artifact Title</label>
          <input
            value={title}
            type="text"
            name="title"
            id="title"
            className="input"
            onChange={e =>
              setEditArtwork({
                ...editArtwork,
                title: e.target.value
              })
            }
          />
        </div>

        <div className="detail">
          <label htmlFor="artist-name">Artist</label>
          <input
            value={artistName}
            type="text"
            name="artist-name"
            id="artist-name"
            className="input"
            onChange={e =>
              setEditArtwork({
                ...editArtwork,
                artistName: e.target.value
              })
            }
          />
        </div>

        <div className="detail">
          <label htmlFor="media">Media</label>
          <input
            value={media}
            type="text"
            name="media"
            id="media"
            className="input"
            onChange={e =>
              setEditArtwork({
                ...editArtwork,
                media: e.target.value
              })
            }
          />
        </div>

        <div className="detail">
          <label htmlFor="year">Year</label>
          <input
            value={year}
            type="text"
            name="year"
            id="year"
            className="input"
            onChange={e =>
              setEditArtwork({
                ...editArtwork,
                year: e.target.value
              })
            }
          />
        </div>

        <div className="detail">
          <label htmlFor="size">Size (in inch)</label>
          <div className="options-detail">
            <input
              value={width || "123"}
              type="text"
              name="size"
              id="width"
              className="input"
              onChange={e =>
                setEditArtwork({
                  ...editArtwork,
                  width: e.target.value
                })
              }
            />
            X
            <input
              value={height || "123"}
              type="text"
              name="height"
              id="height"
              className="input"
              onChange={e =>
                setEditArtwork({
                  ...editArtwork,
                  height: e.target.value
                })
              }
            />
          </div>
        </div>
      </div>
      <div className="additional-information">
        <UploadImage image={image} />

        <div className="detail">
          <label htmlFor="exhibition">Exhibition</label>
          <select
            name="exhibition"
            id="exhibition"
            className="input"
            value={exhibitionId}
            onChange={e =>
              setEditArtwork({
                ...editArtwork,
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
            value={quest}
            type="text"
            name="quest"
            id="quest"
            className="input"
            onChange={e =>
              setEditArtwork({
                ...editArtwork,
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
            value={sensorId}
            className="input"
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
        </div>
      </div>
      <div className="description-artwork">
        <ListTranslation />
        <Translate description={description} />
      </div>

      <button onClick={handleArtwork} className="add">
        Save
      </button>
      {qrCode ? <ArtworkQRCode sensorId={editArtwork.sensorId} /> : <div />}
    </div>
  );
};

export default EditArtworkForm;
