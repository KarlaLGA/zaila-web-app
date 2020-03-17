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
        <img src={imageURL} alt="artifact" style={{ width: "200px" }} />
      </div>

      <div className="information">
        <p>
          Artifact: <span>{title}</span>
        </p>
        <p> Artist: {artistName}</p>
        <p>Exhibition: {exhibitionName}</p>
      </div>

      <div className="icons">
        <Link
          to={{
            pathname: `/dashboard/artifacts/${artworkId}`,
            edit: true
          }}
          className="edit-icon"
        >
          <img
            src="/icons/edit.svg"
            alt="edit icon"
            className="icon-no-background"
          />
          Edit
        </Link>
        <Link to={`/dashboard/artifacts/${artworkId}`} className="button">
          View
        </Link>
      </div>
    </div>
  );
};

export default ArtworkItem;
