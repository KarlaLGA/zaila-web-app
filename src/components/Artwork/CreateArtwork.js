import React from 'react';
//import {useSelector, useDispatch} from 'react-redux';
import { useDispatch } from 'react-redux'

import Translate from './Translate';
import Translation from './Translation'

const CreateArtwork = () => {

    const dispatch = useDispatch();

    //let description = useSelector(state => state.artwork.description);
    // let translation = useSelector(state => state.artwork.translationFr);

    const handleDescription = (e) => {
        let inputDescription = e.target.value;
        dispatch({type: "DESCRIPTION", payload: inputDescription});
        //console.log(description);
    }

    return (
        <div>

            <label htmlFor="name"> Name of Artwork
                <input type="text" name="name" id="name"/>
            </label>

            <textarea
                name="description"
                id="description"
                cols="30"
                rows="10"
                onChange={handleDescription}></textarea>

            <Translate/>

            <Translation/>

            {/* <p>{translation}</p>
            <button>Edit translation</button> */}

        </div>
    )
}

export default CreateArtwork