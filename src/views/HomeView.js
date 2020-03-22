import React, { useEffect, useState } from "react";
import { get } from "services/zaila-api.js";
import Moment from "moment";

import ExhibitionsOverview from "components/Home/ExhibitionsOverview";
import ArtworksOverview from "components/Home/ArtworksOverview";
import SensorsOverview from "components/Home/SensorsOverview";

export default function HomeView() {
  const [exhibitions, setExhibitions] = useState([]);
  const [exhibitionsName, setExhibitionsName] = useState([]);

  //artworks
  const [total, setTotal] = useState(0);
  const [artists, setArtists] = useState([]);
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    get("exhibition")
      .then(data => {
        let exhibitionFormat = data.map(dataSingle => {
          let startDate = new Moment(dataSingle.exhibition.startDate);
          let endDate = new Moment(dataSingle.exhibition.endDate);
          let formatStart = startDate.format("MMM D, YYYY");
          let formatEnd = endDate.format("MMM D, YYYY");
          return {
            exhibition: {
              name: dataSingle.exhibition.name,
              duration: `${formatStart} - ${formatEnd}`,
              startDate: startDate,
              endDate: endDate
            }
          };
        });
        let exhibitionCurrent = exhibitionFormat.filter(exhibition => {
          let currentDay = new Moment(new Date());
          if (
            currentDay >= exhibition.exhibition.startDate &&
            currentDay <= exhibition.exhibition.endDate
          ) {
            return true;
          } else {
            return false;
          }
        });
        let exhibitionName = data.map(dataSingle => ({
          name: dataSingle.exhibition.name,
          exhibitionId: dataSingle.exhibition.exhibitionId
        }));
        setExhibitions(exhibitionCurrent);
        setExhibitionsName(exhibitionName);
      })
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    get("artwork")
      .then(data => {
        console.log(data);
        setTotal(data.length);
        let artist = data.map(artwork => ({
          artist: artwork.artwork.artistName
        }));
        let allArtworks = data.map(artwork => ({
          artwork: artwork.artwork.artworkId,
          exhibitionId: artwork.artwork.exhibitionId
        }));
        setArtworks(allArtworks);

        let filterArtist = artist.filter((single, index, array) => {
          for (let i = 0; i < index; i++) {
            if (array[i].artist === single.artist) {
              return false;
            }
          }
          return true;
        });
        setArtists(filterArtist);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="home-view view">
      <div className="section-header">
        <h1>Museum Overview</h1>
      </div>
      <div className="overview-list">
        <ExhibitionsOverview exhibitions={exhibitions} />
        <ArtworksOverview total={total} artists={artists} />
        <SensorsOverview exhibitions={exhibitionsName} artworks={artworks} />
      </div>
    </div>
  );
}
