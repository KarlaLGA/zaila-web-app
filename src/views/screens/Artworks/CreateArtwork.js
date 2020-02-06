import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
//import {useDispatch} from 'react-redux'

import Translate from '../../../components/Artwork/Translate';
import ListTranslation from '../../../components/Artwork/ListTranslation';

// MOVE FORM TO ITS OWN COMPONENT
// CREATE ARTWORK SCREEN ONLY CALLS ITS CHILD COMPONENTS

const CreateArtwork = () => {

    const {description, translationFr, translationEs, translationCh } = useSelector(state => state.artwork);

    const newArtwork = {
        name: "",
        artist: "",
        medium: "",
        date: "",
        image: "",
        description: "",
        translationFr: "",
        translationEs: "",
        translationCh: ""
    }

    const [artwork,
        setArtwork] = useState(newArtwork);

    const dispatch = useDispatch();

    // let description = useSelector(state => state.artwork.description); let
    // translation = useSelector(state => state.artwork.translationFr);

    const handleDescription = (e) => {
        let inputDescription = e.target.value;
        dispatch({type: "SET_DESCRIPTION", payload: inputDescription});
        //console.log(description);
    }

    const handleUploadImage = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
        console.log(formData.get('file'));

        // send formData object in axios POST
        // axios.post('api url', formData, {

        //})

    }

    const handleArtwork = () => {}

    useEffect(() => {
        setArtwork({
            ...artwork,
            description: description,
            translationFr: translationFr,
            translationEs: translationEs,
            translationCh: translationCh

        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [description, translationFr, translationEs, translationCh]);

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
                Submit an picture of the artwork
                <input
                    type="file"
                    name="image"
                    id="image"
                    placeholder="submit picture"
                    onChange={ handleUploadImage }/>
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

            <ListTranslation/>

            <button onClick={handleArtwork}>Save Artwork</button>

        </div>
    )
}

export default CreateArtwork