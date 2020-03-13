import React, { useEffect, useState } from "react";
import { get } from "services/zaila-api.js";

import ArtworkList from "components/Home/Overview/Artwork/ArtworkList";

const ArtworksOverview = () => {
  const [artworks, setArtworks] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    get("artwork")
      .then(data => {
        setTotal(data.length);
        let artist = data.map(artwork => ({
          artist: artwork.artwork.artistName
        }));
        let filterArtist = artist.filter((single, index, array) => {
          for (let i = 0; i < index; i++) {
            if (array[i].artist === single.artist) {
              return false;
            }
          }
          return true;
        });
        setArtworks(filterArtist);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="overview-item">
      <h2>Artworks</h2>

      <div className="total">
        <p>Artworks Displayed: {total}</p>
      </div>

      <ArtworkList artworks={artworks} total={total} />
    </div>
  );
};

export default ArtworksOverview;
