import React from 'react';
import { useSelector } from 'react-redux';

const SingleArtwork = (props) => {

    let artworkId = parseInt(props.match.params.artworkId);
    let listArtworks = useSelector(state => state.artwork.artworkList);

    let singleArtwork = listArtworks.find(artwork => artwork.artwork.artworkId === artworkId);

    let { title, artistName, media, year, imageURL, exhibitionId, sensorId, artworkDetailsArray } = singleArtwork.artwork;
    return (
        <div>
            <p>Single artwork</p>

            <h2>Artwork: { title }</h2>

            <img src={ imageURL } alt="artwork" style={{width: "200px"}}/>

            <h3> Artist: { artistName }</h3>

            <p>Exhibition: { exhibitionId }</p>
            <p>Sensor: { sensorId }</p>
            <p>Media: { media }</p>
            <p>Year: { year }</p>

            {artworkDetailsArray.map(artworkDetail => (<p key={artworkDetail.artworkDetails.description}>Description: { artworkDetail.artworkDetails.description} <span>Language: { artworkDetail.artworkDetails.languageCode} </span></p>))}

            
        </div>
    )
}

export default SingleArtwork;