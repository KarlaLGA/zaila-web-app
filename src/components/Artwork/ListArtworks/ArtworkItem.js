import React from "react";
import { Link } from "react-router-dom";

const ArtworkItem = props => {
  let {
    title,
    artistName,
    imageURL,
    exhibitionName,
    artworkId
  } = props.artwork;

  return (
    <div className="artwork-item">
      <div className="image">
        <img src={imageURL} alt="artwork" style={{ width: "200px" }} />
      </div>

      <div className="information">
        <p>
          Artwork: <span>{title}</span>
        </p>
        <p> Artist: {artistName}</p>
        <p>Exhibition: {exhibitionName}</p>
      </div>

      <div className="icons">
        <Link
          to={{
            pathname: `/dashboard/artworks/${artworkId}`,
            edit: true
          }}
        >
          Edit
        </Link>
        <Link to={`/dashboard/artworks/${artworkId}`} className="button">
          View
        </Link>
      </div>
    </div>
  );
};

export default ArtworkItem;
