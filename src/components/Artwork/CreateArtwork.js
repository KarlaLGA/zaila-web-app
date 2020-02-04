import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


import Translate from './Translate';

const CreateArtwork = () => {

    const dispatch = useDispatch();

    //let description = useSelector(state => state.artwork.description);
    let translation = useSelector(state => state.artwork.translationFr);

    const handleDescription = (e) => {
        let inputDescription = e.target.value;
        dispatch({type: "DESCRIPTION", payload: inputDescription});
        //console.log(description);
    }

    return (
        <div>

            <textarea
                name="description"
                id="description"
                cols="30"
                rows="10"
                onChange={handleDescription}></textarea>

            <Translate/>
            <p>{translation}</p>

        </div>
    )
}

export default CreateArtwork