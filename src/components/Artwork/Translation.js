import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';

const Translation = (props) => {

    const dispatch = useDispatch();

    const [isVisible, setIsVisible] = useState(false);   
    const [edit, setEdit] = useState(false);

    let { text, language} = props.translation;

    useEffect(() => {
        if (text !== "") {
            setIsVisible(true);
        }
    }, [text]);
    
    const handleEditTranslation = () => {
        setEdit(true);

    }

    const handleNewTranslation = (e) => {
        let inputDescription = e.target.value;
        dispatch({type: `SET_TRANS_${language}`, payload: inputDescription});
    }

    const handleSaveTranslation = () => {
        setEdit(false);
    }

    return (
        <div>

            {!edit ? (
                <p>{text}</p>
                
            ) : (
                <textarea name="editTranslate" id="editTranslate" cols="30" rows="10" className={!edit ? " hidden" : ""} value={text}onChange={ handleNewTranslation }></textarea>
            )}

            
            <button className={!isVisible ? "button hidden" : "button"} onClick={ handleEditTranslation }>Edit translation</button>

            
            <button className={!edit ? "hidden" : ""} onClick={ handleSaveTranslation }>Save</button>
            
        </div>
    )
}

export default Translation
