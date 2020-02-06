import React from 'react';
import { Link } from 'react-router-dom';


const ListOf = () => {
    return (
        <div>

            <p>Here goes a list of artworks</p>

            <Link to="/artworks/create">Create Artwork</Link>
            
        </div>
    )
}

export default ListOf;