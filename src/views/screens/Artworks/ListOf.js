import React from 'react';
import { Link } from 'react-router-dom';

import ListArtwork from '../../../components/Artwork/ListArtwork';


const ListOf = () => {
    return (
        <div>

            <ListArtwork/>

            <Link to="/artworks/create">Create Artwork</Link>
            
        </div>
    )
}

export default ListOf;