import React from "react";
import { Link } from "react-router-dom";

const ArtworkItem = props => {
  let { title, artistName, imageURL, exhibitionId, sensorId } = props.artwork;
  let artwork = props.artwork;

  //console.log(artworkDetailsArray);

  return (
    <div className="artwork-item">
      <Link to={"/artworks/" + artwork.artworkId}>
        <h2>Artwork: {title}</h2>

        <img src={imageURL} alt="artwork" style={{ width: "200px" }} />

        <h3> Artist: {artistName}</h3>

        <p>Exhibition: {exhibitionId}</p>
        <p>Sensor: {sensorId}</p>

      </Link>
    </div>
  );
};

export default ArtworkItem;
