import React from 'react';
import { Link } from 'react-router-dom';

import ListArtwork from '../../../components/Artwork/ListArtworks/ListArtwork';


const ListOf = () => {
    return (
        <div>

            <ListArtwork/>

            <Link to="/exhibitions/create">Create Exhibition</Link>
            
        </div>
    )
}

export default ListOf;