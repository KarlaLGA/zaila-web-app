import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { get } from "services/zaila-api";

const ArtworkItem = props => {
  let { title, artistName, imageURL, exhibitionId } = props.artwork;
  let artwork = props.artwork;

  const [exhibitionName, setExhibitionName] = useState("");

  useEffect(() => {
    get("exhibition")
    .then(data => {
      let exhibition = data.find(dataSingle => dataSingle.exhibition.exhibitionId === exhibitionId);
      setExhibitionName(exhibition.exhibition.name);
    })
  }, [exhibitionId])

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
