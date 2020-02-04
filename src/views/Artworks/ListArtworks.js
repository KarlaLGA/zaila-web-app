import React from 'react';
import { Link } from 'react-router-dom';

import ListOf from '../../components/Artwork/ListOf'

const ListArtworks = () => {
    

    return (
        <div className="artwork view">

            <ListOf/>
            <Link to="/createArtwork">Create Artwork</Link>

        </div>
    )
}

export default ListArtworks;