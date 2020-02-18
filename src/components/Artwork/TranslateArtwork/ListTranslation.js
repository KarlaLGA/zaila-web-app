import React from 'react';
import { useSelector } from 'react-redux';

import Translation from './Translation';


const ListTranslation = () => {

    const artworkDetails = useSelector(state => state.artwork.artworkDetails);

    const translations = [];

    for(let i = 1; i < artworkDetails.length; i++){
        translations.push(artworkDetails[i])
    }

    return (
        <div className="translations-list">

            {translations.map(translation => (<Translation key={translation.languageCode} translation={translation}/>))}
            
        </div>
    )
}

export default ListTranslation;
