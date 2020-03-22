import React from "react";
import { Link } from "react-router-dom";

const ArtworkItem = props => {
  let { title, artistName, imageURL } = props.artwork;
  let artwork = props.artwork;

  return (
    <div className="artwork-item">
      <div className="image">
        <img src={imageURL} alt="artifact" style={{ width: "200px" }} />
      </div>

      <div className="information">
        <p>
          Artifact: <span>{title}</span>
        </p>
        <p> Artist: {artistName}</p>
      </div>

      <div className="icons icons-artwork">
        <Link
          to={"/dashboard/artifacts/" + artwork.artworkId}
          className="button"
        >
          View
        </Link>
      </div>
    </div>
  );
};

export default ArtworkItem;
