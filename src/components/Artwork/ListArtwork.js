import React from 'react';
import { useDispatch } from 'react-redux';

import ArtworkItem from './ArtworkItem';

const ListArtwork = () => {

    const dispatch = useDispatch();

    // TODO: REPLACE THIS MOCKING DATA WITH THE API CALL

    const data = [
        {
            artwork: {
                artworkId: 1,
                exhibitionId: 123,
                sensorId: "n123",
                title: "The Pharao",
                imageURL: "https://i.picsum.photos/id/1025/4951/3301.jpg",
                artistName: "Cleopatra",
                media: "PNG",
                year: "2020",
                artworkDetailsArray: [
                    {
                        artworkDetails: {
                            artworkId: 1,
                            languageCode: "en-US",
                            description: "dog"
                        }
                    }, {
                        artworkDetails: {
                            artworkId: 1,
                            languageCode: "fr-CA",
                            description: "chien"
                        }
                    }
                ]
            }
        }, {
            artwork: {
                artworkId: 2,
                exhibitionId: 123,
                sensorId: "n124",
                title: "Pyramid",
                imageURL: "https://i.picsum.photos/id/219/5184/3456.jpg",
                artistName: "Ramses",
                media: "PNG",
                year: "2020",
                artworkDetailsArray: [
                    {
                        artworkDetails: {
                            artworkId: 2,
                            languageCode: "en-US",
                            description: "Cat"
                        }
                    }, {
                        artworkDetails: {
                            artworkId: 2,
                            languageCode: "fr-CA",
                            description: "Chat"
                        }
                    }
                ]
            }
        }
    ];

    dispatch({type: "SET_ARTWORK_LIST", payload: data});


return (
    <div>
        {data.map(artwork => (<ArtworkItem key={ artwork.artwork.artworkId } artwork= { artwork.artwork }/>))}
    </div>
)}

export default ListArtwork;