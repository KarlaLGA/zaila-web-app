import React from 'react'

const ArtworkItem = (props) => {

    let { title, artistName, imageURL, artworkDetailsArray, exhibitionId, sensorId } = props.artwork;

    console.log(artworkDetailsArray);

    return (
        <div className="artwork-item">

            <h2>Artwork: { title }</h2>

            <img src={ imageURL } alt="artwork" style={{width: "200px"}}/>

            <h3> Artist: { artistName }</h3>

            <p>Exhibition: { exhibitionId }</p>
            <p>Sensor: { sensorId }</p>

            {/* {artworkDetailsArray.map(artworkDetail => (<p key={artworkDetail.artworkDetails.description}>{ artworkDetail.artworkDetails.description} <span>{ artworkDetail.artworkDetails.languageCode} </span></p>))} */}

            
        </div>
    )
}

export default ArtworkItem;