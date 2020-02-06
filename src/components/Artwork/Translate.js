import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import he from 'he';

import config from './config';

const Translate = () => {

    const dispatch = useDispatch();

    let description = useSelector(state => state.artwork.description);

    let sourceLang = "en";

    // ONE BUTTON TO TRANSLATE TO FOUR LANGUAGES

    let targetLang = "fr";

    let targetLang2 = "es";

    let targetLang3 = 'zh';

    //let encodeDescription = encodeURI(description);

    const { API_KEY } = config;

    let urlFrench = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}&q=${description}&source=${sourceLang}&target=${targetLang}`;

    let urlSpanish = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}&q=${description}&source=${sourceLang}&target=${targetLang2}`;

    let urlChinese = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}&q=${description}&source=${sourceLang}&target=${targetLang3}`;

    const handleTranslation = () => {
            axios.get(urlFrench)
            .then(data => {
                let translation = he.decode(data.data.data.translations[0].translatedText);
                //console.log(data);
                //translation = translation.text();
                
                //console.log(translation);
                dispatch({type: "SET_TRANS_FR", payload: translation});
            })
            .catch(error => {
                console.log(error)
            })
            axios.get(urlSpanish)
            .then(data => {
                let translation = he.decode(data.data.data.translations[0].translatedText);
                //console.log(data);
                //translation = translation.text();
                
                //console.log(translation);
                dispatch({type: "SET_TRANS_ES", payload: translation});
            })
            .catch(error => {
                console.log(error)
            })
            axios.get(urlChinese)
            .then(data => {
                let translation = he.decode(data.data.data.translations[0].translatedText);
                //console.log(data);
                //translation = translation.text();
                
                //console.log(translation);
                dispatch({type: "SET_TRANS_CH", payload: translation});
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>

            <button onClick={handleTranslation}>Translate to French, Chinese and Spanish!</button>
            
        </div>
    )
}

export default Translate;