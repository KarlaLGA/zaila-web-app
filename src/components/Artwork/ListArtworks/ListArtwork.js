import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import ArtworkItem from './ArtworkItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const ListArtwork = () => {

    const dispatch = useDispatch();
    const [artworks, setArtworks] = useState([]);

    // TODO: REPLACE THIS MOCKING DATA WITH THE API CALL

    const data = {

        artworks: [
            {
                artworkId: 1,
                exhibitionId: 125,
                sensorId: "n123",
                title: "The Pharao",
                imageURL: "https://i.picsum.photos/id/1025/4951/3301.jpg",
                artistName: "Cleopatra",
                media: "PNG",
                year: "2020",
                artworkDetails: [
                    {
                        "artworkDetailsId": 2333,
                        "description": "This is a famous paiting",
                        "languageCode": "en-CA"
                    }, {
                        "artworkDetailsId": 2334,
                        "description": "Cest une portrait",
                        "languageCode": "fr-CA"
                    }
                ]

            }, {
                artworkId: 2,
                exhibitionId: 123,
                sensorId: "n124",
                title: "Pyramid",
                imageURL: "https://i.picsum.photos/id/219/5184/3456.jpg",
                artistName: "Ramses",
                media: "PNG",
                year: "2020",
                artworkDetails: [
                    {
                        "artworkDetailsId": 2333,
                        "description": "This is a famous paiting",
                        "languageCode": "en-CA"
                    }, {
                        "artworkDetailsId": 2334,
                        "description": "Cest une portrait",
                        "languageCode": "fr-CA"
                    }
                ]
            }

        ]
    };

    useEffect(() => {
        // TODO: ADD API CALL FOR ARTWORK LIST
        
        setArtworks(data.artworks);
        dispatch({type: "SET_ARTWORK_LIST", payload: data.artworks});
        dispatch({type: "EMPTY_ARTWORK_DETAILS"});
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleSearch = () => {
        const search = (document.getElementById("search-artwork")).value;
        console.log(search);
        // TODO: ADD API CALL FOR SEARCH ARTWORK
    }

    return (
        <div>
            <div className="search-bar">
                <label htmlFor="search-artwork">
                    <input
                        type="text"
                        name="search-artwork"
                        id="search-artwork"
                        placeholder="search by title or artist name"/>
                </label>
                <button onClick={handleSearch}><FontAwesomeIcon icon={faSearch}/></button>

            </div>
            {artworks
                .map(artwork => (<ArtworkItem key={artwork.artworkId} artwork={artwork}/>))}
        </div>
    )
}

export default ListArtwork;