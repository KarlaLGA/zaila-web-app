import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import UploadImage from './UploadImage';
import Translate from './TranslateArtwork/Translate';
import ListTranslation from './TranslateArtwork/ListTranslation';
import ArtworkQRCode from './ArtworkQRCode';

// TO UPDATE THE IMAGE, SHOW THE CURRENT IMAGE AND ADD A BUTTON TO UPDATE/ REWRITE THE FILE
const EditArtworkForm = (props) => {

    const dispatch = useDispatch();

    const [editArtwork, setEditArtwork] = useState(props.artwork);

    const { title, image, artistName, media, year, exhibitionId, sensorId, artworkDetails } = editArtwork;

    const artworkDetailsTranslated = useSelector(state => state.artwork.artworkDetails);

    //console.log(artworkDetailsTranslated);

    const description = artworkDetails[0].description;

    const [qrCode, setQrCode] = useState(false);

    const handleDescription = (e) => {
        let inputDescription = e.target.value;
        dispatch({type: "SET_DESCRIPTION", payload: inputDescription});
    };

    useEffect(() => {

        if (artworkDetailsTranslated.length !== 0){

            setEditArtwork({
                ...editArtwork,
                image: image,
                artworkDetails: artworkDetailsTranslated
            });

        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [image, artworkDetailsTranslated]);

    const handleArtwork = () => {
        console.log(editArtwork);

        // axios.post artwork

        setQrCode(true);
    }

    const exhibitionList = [

        // REPLACE WITH API CALL
        
        {exhibitionId: 123,
        exhibitionName: "Egypt"},
        {exhibitionId: 124,
        exhibitionName: "Renaissance"},
        {exhibitionId: 125,
        exhibitionName: "Americana"},
        {exhibitionId: 126,
        exhibitionName: "Latin"}
    ]

    const dataSensors = [

        // REPLACE WITH API CALL

        {sensorId: "n123",
        status: "available"},
        {sensorId: "n124",
        status: "available"},
        {sensorId: "n125",
        status: "linked"},
        {sensorId: "n126",
        status: "available"}
    ]

    const sensorList = dataSensors.map((sensor, index) => {
        sensor.sensorName = `Sensor ${index + 1}`;
        return sensor
    })

    const sensorListFiltered = sensorList.filter(sensor => sensor.status === "available");

    //console.log(description);


    const renderExhibitionList = exhibitionList.map(exhibition => {
        return (<option  value={exhibition.exhibitionId} key={exhibition.exhibitionId}>{exhibition.exhibitionName}</option>)
    });
    
    const renderSensorList = sensorListFiltered.map(sensor => {
        return (<option  value={sensor.sensorId} key={sensor.sensorId}>{sensor.sensorName}</option>)
    });

    return (
        <div className="artwork-form">

            <h2>Create Artwork</h2>

            <label htmlFor="title">
                Name of Artwork
                <input
                    value={ title }
                    type="text"
                    name="title"
                    id="title"
                    onChange={(e) => setEditArtwork({
                    ...editArtwork,
                    title: e.target.value
                })}/>
            </label>

            <label htmlFor="artistName">
                Artist
                <input
                    value={ artistName }
                    type="text"
                    name="artistName"
                    id="artistName"
                    onChange={(e) => setEditArtwork({
                    ...editArtwork,
                    artistName: e.target.value
                })}/>
            </label>

            <label htmlFor="media">
                Media
                <input
                    value={ media }
                    type="text"
                    name="media"
                    id="media"
                    onChange={(e) => setEditArtwork({
                    ...editArtwork,
                    media: e.target.value
                })}/>
            </label>

            <label htmlFor="year">
                Year finished
                <input
                    value={ year }
                    type="text"
                    name="year"
                    id="year"
                    onChange={(e) => setEditArtwork({
                    ...editArtwork,
                    year: e.target.value
                })}/>
            </label>

            <label htmlFor="exhibition">
                Part of Exhibition: 
                <select
                    name="exhibition"
                    id="exhibition"
                    value={ exhibitionId }
                    onChange={(e) => setEditArtwork({
                    ...editArtwork,
                    exhibitionId: e.target.value
                })}>
                    { renderExhibitionList }
                </select>
            </label>

            <label htmlFor="sensor">
                Linked to Sensor: 
                <select
                    name="sensor"
                    id="sensor"
                    value={ sensorId }
                    onChange={(e) => setEditArtwork({
                    ...editArtwork,
                    sensorId: e.target.value
                })}>
                    { renderSensorList }
                </select>
            </label>

            <UploadImage/>

            <label htmlFor="description"/>
            Description of Artwork
            <textarea
                value={ description }
                name="description"
                id="description"
                cols="30"
                rows="10"
                onChange={handleDescription}></textarea>

            <Translate description={ description }/>

            <ListTranslation/>

            <button onClick={handleArtwork}>Save Artwork</button>

            {qrCode ? (

                <ArtworkQRCode sensorId={editArtwork.sensorId}/>

            ) : (
                <div/>
            )}

            


        </div>
    )
}

export default EditArtworkForm