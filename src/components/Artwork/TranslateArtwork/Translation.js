import React from "react";
import { useDispatch } from "react-redux";

const Translation = props => {
  const dispatch = useDispatch();

  console.log(props);

  let { description, languageCode, abbreviation } = props.translation;
  let image = `/assets/icons/${props.translation.image}`;

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
        <div className="icon">
          <img src={image} alt="language icon" />
          <p>{abbreviation}</p>
        </div>
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
