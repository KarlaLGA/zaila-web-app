import React, {useEffect, useState} from "react";
import { get } from "services/zaila-api.js";

import ExhibitionItem from "./ExhibitionItem"

const ListArtwork = () => {
    const [exhibitions,
        setExhibitions] = useState([]);
    
    useEffect(() => {
        get("exhibition")
        .then(data => {
            setExhibitions(data)
        })
        .catch(error => console.log(error));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

return (
    <div>
        {exhibitions.map(({exhibition}) => (<ExhibitionItem key={exhibition.exhibitionId} exhibition={exhibition}/>))}
    </div>
);
};

export default ListArtwork;
