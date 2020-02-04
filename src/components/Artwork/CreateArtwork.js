import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
//import {useDispatch} from 'react-redux'

import Translate from './Translate';
import Translation from './Translation'

const CreateArtwork = () => {

    const {description, translationFr} = useSelector(state => state.artwork);

    const newArtwork = {
        name: "",
        artist: "",
        medium: "",
        date: "",
        image: "",
        description: "",
        translationFr: ""
    }

    

    const [artwork,
        setArtwork] = useState(newArtwork);

    

    const dispatch = useDispatch();

    // let description = useSelector(state => state.artwork.description); let
    // translation = useSelector(state => state.artwork.translationFr);

    const handleDescription = (e) => {
        let inputDescription = e.target.value;
        dispatch({type: "DESCRIPTION", payload: inputDescription});
        //console.log(description);
    }

    const handleArtwork = () => {}

    useEffect(() => {
        setArtwork({...artwork, description: description, translationFr: translationFr});
}, [description, translationFr]);

    return (
        <div>

            <h2>Create Artwork</h2>

            <label htmlFor="name">
                Name of Artwork
                <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={(e) => setArtwork({
                    ...artwork,
                    name: e.target.value
                })}/>
            </label>

            <label htmlFor="artist">
                Artist
                <input
                    type="text"
                    name="artist"
                    id="artist"
                    onChange={(e) => setArtwork({
                    ...artwork,
                    artist: e.target.value
                })}/>
            </label>

            <label htmlFor="medium">
                Medium
                <input
                    type="text"
                    name="medium"
                    id="medium"
                    onChange={(e) => setArtwork({
                    ...artwork,
                    medium: e.target.value
                })}/>
            </label>
            <label htmlFor="date">
                Year finished
                <input
                    type="text"
                    name="date"
                    id="date"
                    onChange={(e) => setArtwork({
                    ...artwork,
                    date: e.target.value
                })}/>
            </label>

            <label htmlFor="image">
                Submit an picture of the image
                <input
                    type="file"
                    name="image"
                    id="image"
                    onChange={(e) => setArtwork({
                    ...artwork,
                    image: e.target.value
                })}/>
            </label>

            <label htmlFor="description"/>
            Description of Artwork
            <textarea
                name="description"
                id="description"
                cols="30"
                rows="10"
                onChange={handleDescription}></textarea>

            <Translate/>

            <Translation/>

            <button onClick={handleArtwork}>Save Artwork</button>

        </div>
    )
}

export default CreateArtwork