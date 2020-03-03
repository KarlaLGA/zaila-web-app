import React from 'react';
import { Link } from 'react-router-dom';

import ListExhibition from 'components/Exhibition/ListExhibitions/ListExhibition';
import ExhibitionHeader from 'components/Exhibition/ListExhibitions/ExhibitionHeader';


const ListOf = () => {
    // infinite date
    return (
        <div className="list exhibition-list">
            <ExhibitionHeader/>
            <ListExhibition/>

            <Link to="/dashboard/exhibitions/create" className="add">Add</Link>
            
        </div>
    )
}

export default ListOf;