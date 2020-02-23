import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";

const ListArtwork = () => {
    const dispatch = useDispatch();
    const [exhibitions,
        setExhibitions] = useState([]);

    const data = [
        {
            exhibitionId: 123,
            museumId: 1,
            name: "Picasso 3",
            description: "Picasso 3 exhibition",
            imageURL: "https://someimage.com",
            startDate: "2020-05-01",
            endDate: "2020-12-31",
            categoryId: 1,
            completionBadgeId: 1,
            completionXP: 10

        }
    ]

    useEffect(() => {
        dispatch({type: "SET_EXHIBITION_LIST", payload: data});
        dispatch({type: "EMPTY_EXHIBITION_DETAILS"});
        setExhibitions(data);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};

return (
    <div>
        {exhibitions.map(({exhibition}) => (<ExhibitionItem key={exhibition.exhibitionId} exhibition={exhibition}/>))}
    </div>
);
};

export default ListArtwork;
