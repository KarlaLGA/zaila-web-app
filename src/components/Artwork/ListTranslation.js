import React from 'react';
import { useSelector } from 'react-redux';
// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';

import Translation from './Translation';


const ListTranslation = () => {

    let translationFr = useSelector(state => state.artwork.translationFr);
    let translationEs = useSelector(state => state.artwork.translationEs);
    let translationCh = useSelector(state => state.artwork.translationCh);

    const translations = [
        {
            text: translationFr,
            language: "FR"
        },
        {
            text: translationEs,
            language: "ES"
        },
        {
            text: translationCh,
            language: "CH"
        }
    ]
    return (
        <div className="translations-list">

            {translations.map(translation => (<Translation key={translation.language} translation={translation}/>))}
        
            
        </div>
    )
}

export default ListTranslation;
