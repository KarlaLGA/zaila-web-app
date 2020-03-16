import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Translation from "./Translation";

const ListTranslation = props => {
  const artworkDetails = useSelector(state => state.artwork.artworkDetails);

  const description = artworkDetails[0].description;

  const translations = [];

  const dispatch = useDispatch();

  const handleDescription = e => {
    let inputDescription = e.target.value;
    dispatch({ type: "SET_DESCRIPTION", payload: inputDescription });
  };

  for (let i = 1; i < artworkDetails.length; i++) {
    translations.push(artworkDetails[i]);
  }

  return (
    <div className="translations-list">
      <label htmlFor="description">
        Artifact Description
        <textarea
          value={description ? description : ""}
          name="description"
          id="description"
          cols="30"
          rows="10"
          className="input"
          onChange={handleDescription}
        ></textarea>
      </label>
      {translations.map((translation, index) => (
        <Translation key={index} translation={translation} />
      ))}
    </div>
  );
};

export default ListTranslation;
