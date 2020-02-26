import React from 'react';
import { Link } from 'react-router-dom';

import ListExhibition from 'components/Exhibition/ListExhibitions/ListExhibition';
import ExhibitionHeader from 'components/Exhibition/ListExhibitions/ExhibitionHeader';


const ListOf = () => {
    return (
        <div className="list exhibition-list">
            <ExhibitionHeader/>
            <ListExhibition/>

            <Link to="/exhibitions/create" className="add">Add</Link>
            
        </div>
    )
}

export default ListOf;