import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Translation from "./Translation";

const ListTranslation = () => {
  const artworkDetails = useSelector(state => state.artwork.artworkDetails);

  const description = artworkDetails[0].description;

  const descriptionInformation = {
    image: "/assets/icons/english.png",
    abbreviation: "EN"
  };

  const translations = [];

  const additionalInformation = [
    {
      languageCode: "zh-CN",
      image: "chinese.png",
      abbreviation: "CH"
    },
    {
      languageCode: "fr-CA",
      image: "french.png",
      abbreviation: "FR"
    },
    {
      languageCode: "es-ES",
      image: "spanish.png",
      abbreviation: "ES"
    }
  ];

  const dispatch = useDispatch();

  const handleDescription = e => {
    let inputDescription = e.target.value;
    dispatch({ type: "SET_DESCRIPTION", payload: inputDescription });
  };

  for (let i = 1; i < artworkDetails.length; i++) {
    translations.push(artworkDetails[i]);
  }

  const translationsList = translations.map(translation => {
    let trans = translation;
    additionalInformation.map(information => {
      if (translation.languageCode === information.languageCode) {
        trans = {
          ...translation,
          image: information.image,
          abbreviation: information.abbreviation
        };
      }
      return trans;
    });
    return trans;
  });

  return (
    <div className="translations-list">
      <div>
        <div className="options-detail">
          <label htmlFor="description">Artifact Description</label>
          <div className="icon">
            <img src={descriptionInformation.image} alt="language icon" />
            <p>{descriptionInformation.abbreviation}</p>
          </div>
        </div>

        <textarea
          value={description ? description : ""}
          name="description"
          id="description"
          cols="30"
          rows="10"
          className="input"
          onChange={handleDescription}
        ></textarea>
      </div>

      {translationsList.map((translation, index) => (
        <Translation key={index} translation={translation} />
      ))}
    </div>
  );
};

export default ListTranslation;
