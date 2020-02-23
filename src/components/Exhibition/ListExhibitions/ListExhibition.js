import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";

import ExhibitionItem from "./ExhibitionItem"

const ListArtwork = () => {
    const dispatch = useDispatch();
    const [exhibitions,
        setExhibitions] = useState([]);

    const data = [
        {
            exhibition: {
                exhibitionId: 123,
                museumId: 1,
                name: "Egypt",
                description: "Ancient Egyptian art refers art produced in ancient Egypt between the 31st century BC and the 4th century AD. It includes paintings, sculptures, drawings on papyrus, faience, jewelry, ivories, architecture, and other art media. It is also very conservative: the art style changed very little over time. Much of the surviving art comes from tombs and monuments, giving more insight into the Egyptians' belief of the afterlife.",
                imageURL: "https://i.picsum.photos/id/116/400/200.jpg",
                startDate: "2018-01-01T00:00:00.000Z",
                endDate: "2020-05-31T00:00:00.000Z",
                categoryId: 1,
                completionBadgeId: 1,
                completionXP: 10
            }
        }
    ]
    
    useEffect(() => {
        dispatch({type: "SET_EXHIBITION_LIST", payload: data});
        dispatch({type: "EMPTY_EXHIBITION_DETAILS"});
        setExhibitions(data);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


return (
    <div>
        {exhibitions.map(({exhibition}) => (<ExhibitionItem key={exhibition.exhibitionId} exhibition={exhibition}/>))}
    </div>
);
};

export default ListArtwork;
