import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { get } from "services/zaila-api";

import ListArtwork from 'components/Artwork/ListArtworks/ListArtwork';

const ListOf = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        get("exhibition")
        .then(data => {
          dispatch({type: "SET_EXHIBITIONS", payload: data})
        })
      }, [dispatch])

    return (
        <div className="list artwork-list">

            <ListArtwork/>

            <Link to="/dashboard/artworks/create" className="add">Add</Link>
            
        </div>
    )
}

export default ListOf;