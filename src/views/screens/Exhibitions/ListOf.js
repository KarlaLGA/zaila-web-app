import React from 'react';
import { Link } from 'react-router-dom';

import ListExhibition from 'components/Exhibition/ListExhibitions/ListExhibition';
import ExhibitionHeader from 'components/Exhibition/ListExhibitions/ExhibitionHeader';


const ListOf = () => {
    return (
        <div>
            <ExhibitionHeader/>
            <ListExhibition/>

            <Link to="/exhibitions/create">Create Exhibition</Link>
            
        </div>
    )
}

export default ListOf;