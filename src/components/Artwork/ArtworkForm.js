import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import UploadImage from './UploadImage';
import Translate from './Translate';
import ListTranslation from './ListTranslation';
import ArtworkQRCode from './ArtworkQRCode';


const ArtworkForm = () => {

    const { image, description, translationFr, translationEs, translationCh } = useSelector(state => state.artwork);

    const newArtwork = {
        title: "",
        image: {},
        artistName: "",
        media: "",
        year: "",
        exhibitionId: 123,
        sensorId: 234,
        artworkDetails: []
    }

    const [artwork,
        setArtwork] = useState(newArtwork);

    const [qrCode, setQrCode] = useState(false);

    const dispatch = useDispatch();

    const handleDescription = (e) => {
        let inputDescription = e.target.value;
        dispatch({type: "SET_DESCRIPTION", payload: inputDescription});
    }

    useEffect(() => {
        setArtwork({
            ...artwork,
            image: image,
            artworkDetails: [
                {
                    description: description,
                    languageCode: "en-CA"
                },
                {
                    description: translationFr,
                    languageCode: "fr-CA"
                },
                {
                    description: translationEs,
                    languageCode: "es-ES"
                },
                {
                    description: translationCh,
                    languageCode: "zh-CN"
                }
            ]
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [image, description, translationFr, translationEs, translationCh]);

    const handleArtwork = () => {
        console.log(artwork);

        // axios.post artwork

        setQrCode(true);

    }

    return (
        <div className="artwork-form">

            <h2>Create Artwork</h2>

            <label htmlFor="title">
                Name of Artwork
                <input
                    type="text"
                    name="title"
                    id="title"
                    onChange={(e) => setArtwork({
                    ...artwork,
                    title: e.target.value
                })}/>
            </label>

            <label htmlFor="artistName">
                Artist
                <input
                    type="text"
                    name="artistName"
                    id="artistName"
                    onChange={(e) => setArtwork({
                    ...artwork,
                    artistName: e.target.value
                })}/>
            </label>

            <label htmlFor="media">
                Media
                <input
                    type="text"
                    name="media"
                    id="media"
                    onChange={(e) => setArtwork({
                    ...artwork,
                    media: e.target.value
                })}/>
            </label>

            <label htmlFor="year">
                Year finished
                <input
                    type="text"
                    name="year"
                    id="year"
                    onChange={(e) => setArtwork({
                    ...artwork,
                    year: e.target.value
                })}/>
            </label>

            <label htmlFor="exhibition">
                Part of Exhibition: 
                <select
                    name="exhibition"
                    id="exhibition"
                    onChange={(e) => setArtwork({
                    ...artwork,
                    exhibitionId: e.target.value
                })}>
                    <option value="123">Egypt</option>
                    <option value="124">Renaissance</option>
                    <option value="125">Americana</option>
                    <option value="126">Latin</option>
                </select>
            </label>

            <label htmlFor="sensor">
                Linked to Sensor: 
                <select
                    name="sensor"
                    id="sensor"
                    onChange={(e) => setArtwork({
                    ...artwork,
                    sensorId: e.target.value
                })}>
                    <option value="234">Sensor 1</option>
                    <option value="235">Sensor 2</option>
                    <option value="236">Sensor 3</option>
                    <option value="237">Sensor 4</option>
                </select>
            </label>

            <UploadImage/>

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

            {qrCode ? (

                <ArtworkQRCode sensorId={artwork.sensorId}/>

            ) : (
                <div/>
            )}

            


        </div>
    )
}

export default ArtworkForm