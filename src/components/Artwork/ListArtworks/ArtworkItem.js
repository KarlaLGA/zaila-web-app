import React from "react";
import { Link } from "react-router-dom";

const ArtworkItem = props => {
  let { title, artistName, imageURL, exhibitionName } = props.artwork;
  let artwork = props.artwork;

  return (
    <div className="artwork-item">
      <div className="image">
        <img src={imageURL} alt="artwork" style={{ width: "200px" }} />
      </div>

      <div className="information">
        <p>Artwork: {title}</p>
        <p> Artist: {artistName}</p>
        <p>Exhibition: {exhibitionName}</p>
      </div>

      <div className="icons">
        <p>Edit</p>
        <Link to={"/dashboard/artworks/" + artwork.artworkId}>View</Link>
      </div>
    </div>
  );
};

export default ArtworkItem;
