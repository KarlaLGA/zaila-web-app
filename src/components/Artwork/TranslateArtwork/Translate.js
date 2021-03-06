import React from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import he from "he";

const Translate = props => {
  const dispatch = useDispatch();

  let description = props.description;

  let sourceLang = "en";

  let targetLang = "fr";

  let targetLang2 = "es";

  let targetLang3 = "zh";

  const API_KEY = process.env.REACT_APP_TRANSLATE_API_KEY;

  let urlFrench = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}&q=${description}&source=${sourceLang}&target=${targetLang}`;

  let urlSpanish = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}&q=${description}&source=${sourceLang}&target=${targetLang2}`;

  let urlChinese = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}&q=${description}&source=${sourceLang}&target=${targetLang3}`;

  const handleTranslation = () => {
    dispatch({ type: "EMPTY_TRANSLATIONS" });
    axios
      .post(urlFrench)
      .then(data => {
        let translation = he.decode(
          data.data.data.translations[0].translatedText
        );
        dispatch({ type: "SET_TRANS_FR", payload: translation });
      })
      .catch(error => {
        console.log(error);
      });
    axios
      .post(urlSpanish)
      .then(data => {
        let translation = he.decode(
          data.data.data.translations[0].translatedText
        );
        dispatch({ type: "SET_TRANS_ES", payload: translation });
      })
      .catch(error => {
        console.log(error);
      });
    axios
      .post(urlChinese)
      .then(data => {
        let translation = he.decode(
          data.data.data.translations[0].translatedText
        );
        dispatch({ type: "SET_TRANS_ZH", payload: translation });
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <button onClick={handleTranslation} className="button">
      Translate
    </button>
  );
};

export default Translate;
