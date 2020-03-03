import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { get } from "services/zaila-api";
import ArtworkItem from "./ArtworkItem";

const ListArtwork = () => {
  const dispatch = useDispatch();
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    get("artwork")
      .then(data => {
        setArtworks(data);
        dispatch({ type: "SET_ARTWORK_LIST", payload: data });
        dispatch({ type: "EMPTY_ARTWORK_DETAILS" });
      })
      .catch(error => {
        console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {artworks.map(({ artwork }) => (
        <ArtworkItem key={artwork.artworkId} artwork={artwork} />
      ))}
    </div>
  );
};

export default ListArtwork;
