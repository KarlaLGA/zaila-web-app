import React from 'react';

import SingleArtwork from '../../../components/Artwork/SingleArtwork';


const Artwork = (props) => {

    let artworkId = parseInt(props.match.params.artworkId);
    
    return (
        <div className="artwork">
            <SingleArtwork artworkId={ artworkId}/>
        </div>
    )
}

export default Artwork;