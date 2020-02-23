import React from 'react';
import { Link } from 'react-router-dom';

import ListExhibition from '../../../components/Exhibition/ListExhibitions/ListExhibition';


const ListOf = () => {
    return (
        <div>

            <ListExhibition/>

            <Link to="/exhibitions/create">Create Exhibition</Link>
            
        </div>
    )
}

export default ListOf;