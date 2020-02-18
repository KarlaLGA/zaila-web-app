import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const UploadImage = () => {

    const dispatch = useDispatch();

    const image = useSelector(state => state.artwork.image);

    const handleUploadImage = async (e) => {

        const file = e.target.files[0];

        const proxyURL = 'https://cors-anywhere.herokuapp.com/';

        getSignedRequest(file)
            .then(result => {
                console.log(result);

                 uploadFile(file, result.data.signedRequest, result.data.url);
                 
            })
            .catch(error => {
                console.log(error)
            })

    }

    function uploadFile(file, signedRequest, url){
        const xhr = new XMLHttpRequest();
        var myurl = 'https://cors-anywhere.herokuapp.com/'+signedRequest;
        xhr.open('PUT', myurl);
    
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
       // xhr.setRequestHeader()
    
        xhr.onreadystatechange = () => {
          if(xhr.readyState === 4){
            if(xhr.status === 200){
              console.log("success")
              console.log(xhr)
              dispatch({type: "SET_IMAGE", payload: url})
            }
            else{
              console.log(xhr) 
              alert('Could not upload file.');
            }
          }
        };
        xhr.send(file);
      }
    const getSignedRequest = async (file) => {

        return axios.get(`storage/sign-s3?fileName=${file.name}&fileType=${file.type}`)               
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
            
            {image && (
                <img src ={image}></img>
            )}
            
        </div>
    )
}

export default UploadImage;
