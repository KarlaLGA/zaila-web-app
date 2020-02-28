import React, {useState, useEffect } from "react";
import { get } from "services/zaila-api";

import EditArtworkForm from "./EditArtworkForm";
import ArtworkQRCode from "./ArtworkQRCode";

const SingleArtwork = props => {

    let singleArtwork = props.singleArtwork;

    const [artworkEdit,
        setArtworkEdit] = useState(false);

    const [exhibitionName, setExhibitionName] = useState("");

    useEffect(() => {
      get("exhibition")
      .then(data => {
        let exhibition = data.find(dataSingle => dataSingle.exhibition.exhibitionId === singleArtwork.artwork.exhibitionId);
        setExhibitionName(exhibition.exhibition.name);
      })
    }, [singleArtwork.artwork.exhibitionId])

    const handleEdit = () => {
        setArtworkEdit(true);
    };
    return (
        <div>
            {!artworkEdit
                ? (
                    <div className="artwork-view single-view">

                        <div className="general-information">

                            <h2>Artwork Information</h2>

                            <div className="detail">
                                <p>Artwork Title</p>
                                <p>{singleArtwork.artwork.title}</p>
                            </div>

                            <div className="detail">
                                <p>Artist</p>
                                <p>{singleArtwork.artwork.artistName}</p>
                            </div>

                            <div className="detail">
                                <p>Media</p>
                                <p>{singleArtwork.artwork.media}</p>
                            </div>

                            <div className="detail">
                                <p>Year</p>
                                <p>{singleArtwork.artwork.year}</p>
                            </div>

                            <div className="detail">
                                <p>Size (in inches)</p>
                                <p>{singleArtwork.artwork.width}
                                    x {singleArtwork.artwork.height}</p>
                            </div>

                            <div className="description">
                              <p>Artwork Description</p>
                              {singleArtwork
                                .artwork
                                .artworkDetails
                                .map(artworkDetail => (
                                    <p key={artworkDetail.description}>
                                        {artworkDetail.description}
                                        <span>Language: {artworkDetail.languageCode}</span>
                                    </p>
                                ))}
                            </div>

                        </div>

                        <div className="additional-information">

                        <img
                            src={singleArtwork.artwork.imageURL}
                            alt="artwork"
                            style={{
                            width: "200px"
                        }}/>

                        <p>Exhibition: {exhibitionName}</p>
                        <p>Sensor ID: {singleArtwork.artwork.sensorId}</p>

                        <ArtworkQRCode sensorId={singleArtwork.artwork.sensorId}/>

                        </div>

                        <button onClick={handleEdit}>Edit</button>
                    </div>
                )
                : (<EditArtworkForm artwork={singleArtwork.artwork}/>)}

        </div>
    );
};

export default SingleArtwork;
