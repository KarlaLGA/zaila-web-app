import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import ArtworkForm from '../../../components/Artwork/ArtworkForm';
// import EditArtworkForm from '../../../components/Artwork/EditArtworkForm';

const SingleArtwork = (props) => {

    const dispatch = useDispatch();

    let artworkId = parseInt(props.match.params.artworkId);
    let listArtworks = useSelector(state => state.artwork.artworkList);

    const [artworkEdit,
        setArtworkEdit] = useState(false);

    let singleArtwork = listArtworks.find(artwork => artwork.artwork.artworkId === artworkId);

    dispatch({type: "SET_SELECTED_ARTWORK", payload: singleArtwork});

    let {
        title,
        artistName,
        media,
        year,
        imageURL,
        exhibitionId,
        sensorId,
        artworkDetailsArray
    } = singleArtwork.artwork;

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

                {artworkDetailsArray.map(artworkDetail => (
                    <p key={artworkDetail.artworkDetails.description}>Description: {artworkDetail.artworkDetails.description}
                        <span>Language: {artworkDetail.artworkDetails.languageCode}
                        </span>
                    </p>
                ))}

                <button onClick={handleEdit}>Edit</button>

            </div>
            ) : (
                <ArtworkForm method="edit" artwork={ singleArtwork }/>
            )}

            

        </div>
    )
}

export default SingleArtwork;