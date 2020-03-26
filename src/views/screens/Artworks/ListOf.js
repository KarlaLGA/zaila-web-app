import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { get } from "../../../services/zaila-api";

import ListArtwork from "components/Artwork/ListArtworks/ListArtwork";
import SearchBar from "components/Artwork/ListArtworks/SearchBar";

const ListOf = () => {
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
          dispatch({ type: "EMPTY_ARTWORK_DETAILS" });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [exhibitions, dispatch]);

  const handleSearch = query => {
    get(`artwork?search=${query}`)
      .then(data => {
        console.log(data);
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
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="list">
      <div className="section-header section-header-artworks">
        <h1>Artifacts</h1>
        <SearchBar onSearch={handleSearch} />
      </div>
      <ListArtwork artworks={artworks} />

      <Link to="/dashboard/artifacts/create" className="add">
        <img src="/assets/icons/add.svg" alt="add icon" />
        Add
      </Link>
    </div>
  );
};

export default ListOf;
