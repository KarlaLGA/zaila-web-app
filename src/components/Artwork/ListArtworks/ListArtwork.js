import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { get } from "services/zaila-api";
import ArtworkItem from "./ArtworkItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

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

  const handleSearch = () => {
    const search = document.getElementById("search-artwork").value;
    console.log(search);
    // TODO: ADD API CALL FOR SEARCH ARTWORK
  };

  return (
    <div>
      <div className="search-bar">
        <label htmlFor="search-artwork">
          <input
            type="text"
            name="search-artwork"
            id="search-artwork"
            placeholder="search by title or artist name"
          />
        </label>
        <button onClick={handleSearch}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      {artworks.map(({ artwork }) => (
        <ArtworkItem key={artwork.artworkId} artwork={artwork} />
      ))}
    </div>
  );
};

export default ListArtwork;
