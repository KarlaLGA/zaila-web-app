import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Translation = () => {

    const dispatch = useDispatch();

    const [isVisible, setIsVisible] = useState(false);   
    const [edit, setEdit] = useState(false);

    let translation = useSelector(state => state.artwork.translationFr);
    let translation2 = useSelector(state => state.artwork.translationEs);
    let translation3 = useSelector(state => state.artwork.translationCh);

    useEffect(() => {
        if (translation !== "") {
            setIsVisible(true);
        }
    }, [translation]);
    
    const handleEditTranslation = () => {
        setEdit(true);

    }

    const handleNewTranslation = (e) => {
        let inputDescription = e.target.value;
        dispatch({type: "TRANS_FR", payload: inputDescription});
    }

    const handleSaveTranslation = () => {
        setEdit(false);
    }

    return (
        <div>

            {!edit ? (
                <div>
                <p>{translation}</p>
                <p>{translation2}</p>
                <p>{translation3}</p>
                </div>
                
            ) : (
                <textarea name="editTranslate" id="editTranslate" cols="30" rows="10" className={!edit ? " hidden" : ""} value={translation}onChange={ handleNewTranslation }></textarea>
            )}

            
            <button className={!isVisible ? "button hidden" : "button"} onClick={ handleEditTranslation }>Edit translation</button>

            
            <button className={!edit ? "hidden" : ""} onClick={ handleSaveTranslation }>Save</button>
            
        </div>
    )
}

export default Translation
