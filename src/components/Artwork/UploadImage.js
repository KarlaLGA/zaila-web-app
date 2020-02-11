import React from 'react';
import { useDispatch } from 'react-redux';

const UploadImage = () => {

    const dispatch = useDispatch();

    const handleUploadImage = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
        const image = formData.get('file');
        //console.log(image);
        dispatch({type: "SET_IMAGE", payload: image})

        // send formData object in axios POST
        // axios.post('api url', formData, {
        //})

    }

    return (
        <div>
        <label htmlFor="image">
                Submit an picture of the artwork
                <input
                    type="file"
                    name="image"
                    id="image"
                    placeholder="submit picture"
                    onChange={ handleUploadImage }/>
            </label>
            
        </div>
    )
}

export default UploadImage;
