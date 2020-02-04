import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import he from 'he';

import config from './config';

const Translate = () => {

    const dispatch = useDispatch();

    let description = useSelector(state => state.artwork.description);

    let sourceLang = "en";
    let targetLang = "fr";
    let encodeDescription = encodeURI(description);

    const { API_KEY } = config;

    let url = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}&q=${encodeDescription}&source=${sourceLang}&target=${targetLang}`;

    const handleTranslation = () => {
            axios.get(url)
            .then(data => {
                let translation = he.decode(data.data.data.translations[0].translatedText);
                //translation = translation.text();
                
                console.log(translation);
                dispatch({type: "TRANS_FR", payload: translation});
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>

            <button onClick={handleTranslation}>Translate to French</button>
            
        </div>
    )
}

export default Translate;