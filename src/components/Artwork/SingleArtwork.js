import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import EditArtworkForm from './EditArtworkForm';
import ArtworkQRCode from './ArtworkQRCode';
import DeleteArtwork from './DeleteArtwork/DeleteArtwork';


const SingleArtwork = (props) => {

    const dispatch = useDispatch();

    let artworkId = props.artworkId;
    let listArtworks = useSelector(state => state.artwork.artworkList);

    const [artworkEdit,
        setArtworkEdit] = useState(false);

    let singleArtwork = listArtworks.find(artwork => artwork.artworkId === artworkId);

    dispatch({type: "SET_SELECTED_ARTWORK", payload: singleArtwork});

    let {
        title,
        artistName,
        media,
        year,
        imageURL,
        exhibitionId,
        sensorId,
        artworkDetails
    } = singleArtwork;

    //console.log(singleArtwork);

    const handleEdit = () => {
        setArtworkEdit(true);
    }
    return (
        <div>

            {!artworkEdit ? (

                <div>

                <p>Single artwork</p>

                <h2>Artwork: {title}</h2>

                <img
                    src={imageURL}
                    alt="artwork"
                    style={{
                    width: "200px"
                }}/>

                <h3>
                    Artist: {artistName}</h3>

                <p>Exhibition: {exhibitionId}</p>
                <p>Sensor: {sensorId}</p>
                <p>Media: {media}</p>
                <p>Year: {year}</p>

                {artworkDetails.map(artworkDetail => (
                    <p key={artworkDetail.description}>Description: {artworkDetail.description}
                        <span>Language: {artworkDetail.languageCode}
                        </span>
                    </p>
                ))}

                <ArtworkQRCode sensorId={ sensorId }/>

                <button onClick={handleEdit}>Edit</button>

            </div>
            ) : (
                <EditArtworkForm method="edit" artwork={ singleArtwork }/>
            )}

            <DeleteArtwork/>

        </div>
    )
}

export default SingleArtwork;