import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';

const UploadImage = () => {

    const dispatch = useDispatch();

    const image = useSelector(state => state.exhibition.image);

    const handleUploadImage = async(e) => {

        const file = e.target.files[0];

        getSignedRequest(file)
        .then(result => {
            uploadFile(file, result.data.signedRequest, result.data.url);
        }).catch(error => {
            console.log(error)
        })

    }

    function uploadFile(file, signedRequest, url) {
        const xhr = new XMLHttpRequest();
        var myurl = 'https://cors-anywhere.herokuapp.com/' + signedRequest;
        xhr.open('PUT', myurl);

        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    dispatch({type: "SET_IMAGE", payload: url})
                } else {
                    alert('Could not upload file.');
                }
            }
        };

        xhr.send(file);
    }

    const getSignedRequest = async(file) => {
        return axios.get(`storage/sign-s3?fileName=${file.name}&fileType=${file.type}`)
    }

    return (
        <div>
            <label htmlFor="image">
                Submit a picture of the exhibition
                <input
                    type="file"
                    name="image"
                    id="image"
                    placeholder="submit picture"
                    onChange={handleUploadImage}/>
            </label>

            {image && (
                <img src ={image} alt="artwork"></img>
            )}

        </div>
    )
}

export default UploadImage;
