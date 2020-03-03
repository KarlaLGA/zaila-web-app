import React from "react";
import { useDispatch } from "react-redux";

const Translation = props => {
  const dispatch = useDispatch();

  let { description, languageCode } = props.translation;

  const handleNewTranslation = e => {
    let inputDescription = e.target.value;
    dispatch({
      type: "EDIT_TRANS",
      payload: { inputDescription, languageCode }
    });
  };

  return (
    <div>
      <div className="options-detail">
        <label htmlFor="description">Artwork Description</label>
        <p>{languageCode}</p>
      </div>

      <textarea
        name="description"
        id="description"
        cols="30"
        rows="10"
        className="input"
        value={description}
        onChange={handleNewTranslation}
      ></textarea>
    </div>
  );
};

export default Translation;
