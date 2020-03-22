import React from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const UploadImage = props => {
  const dispatch = useDispatch();

  const imageReceived = props.image;

  const image = useSelector(state => state.exhibition.image) || imageReceived;

  const handleUploadImage = async e => {
    const file = e.target.files[0];

    getSignedRequest(file)
      .then(result => {
        uploadFile(file, result.data.signedRequest, result.data.url);
      })
      .catch(error => {
        console.log(error);
      });
  };

  function uploadFile(file, signedRequest, url) {
    const xhr = new XMLHttpRequest();
    var myurl = "https://cors-anywhere.herokuapp.com/" + signedRequest;
    xhr.open("PUT", myurl);

    xhr.setRequestHeader("Access-Control-Allow-Origin", "*");

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          dispatch({ type: "SET_IMAGE_EXHIBITION", payload: url });
        } else {
          alert("Could not upload file.");
        }
      }
    };

    xhr.send(file);
  }

  const getSignedRequest = async file => {
    return axios.get(
      `storage/sign-s3?fileName=${file.name}&fileType=${file.type}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userData")}`
        }
      }
    );
  };

  return (
    <div className="upload">
      {image ? (
        <div className="image">
          <img src={image} alt="artifact"></img>
        </div>
      ) : (
        <div className="image empty"></div>
      )}
      <input
        type="file"
        name="image"
        id="image"
        placeholder="submit picture"
        onChange={handleUploadImage}
      />
    </div>
  );
};

export default UploadImage;
