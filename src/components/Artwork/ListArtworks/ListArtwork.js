import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { get } from "../../../services/zaila-api";
import ArtworkItem from "./ArtworkItem";

const ListArtwork = () => {
  const dispatch = useDispatch();
  const [artworks, setArtworks] = useState([]);

  const exhibitions = useSelector(state => state.exhibition.exhibitionList);

  useEffect(() => {
    if (exhibitions.length !== 0) {
      get("artwork")
        .then(data => {
          let artworksData = data.map(artworkData => {
            let exhibitionId = artworkData.artwork.exhibitionId;

            let exhibition = exhibitions.find(
              x => x.exhibition.exhibitionId === exhibitionId
            );
            let artwork = {
              ...artworkData.artwork,
              exhibitionName: exhibition.exhibition.name
            };
            return { artwork };
          });
          setArtworks(artworksData);
          dispatch({ type: "SET_ARTWORK_LIST", payload: data });
          dispatch({ type: "EMPTY_ARTWORK_DETAILS" });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [exhibitions, dispatch]);

  return (
    <div>
      {artworks.map(({ artwork }) => (
        <ArtworkItem key={artwork.artworkId} artwork={artwork} />
      ))}
    </div>
  );
};

export default ListArtwork;
