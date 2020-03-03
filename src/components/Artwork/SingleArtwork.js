import React, {useState } from "react";
import { useSelector } from 'react-redux';
import EditArtworkForm from "./EditArtworkForm";
import ArtworkQRCode from "./ArtworkQRCode";

const SingleArtwork = props => {

    let singleArtwork = props.singleArtwork;

    const [artworkEdit,
        setArtworkEdit] = useState(false);

    const exhibitions = useSelector(state => state.exhibition.exhibitionList);

    let exhibitionName = exhibitions.find(singleEx => singleEx.exhibition.name === singleArtwork.artwork.exhibitionId)

    console.log(exhibitionName);

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
