import React, { useEffect, useState } from "react";
import { get } from "services/zaila-api.js";
import Moment from "moment";

import ExhibitionsOverview from "components/Home/ExhibitionsOverview";
import ArtworksOverview from "components/Home/ArtworksOverview";
import SensorsOverview from "components/Home/SensorsOverview";

export default function HomeView() {
  const [exhibitions, setExhibitions] = useState([]);
  const [exhibitionsName, setExhibitionsName] = useState([]);
  useEffect(() => {
    get("exhibition")
      .then(data => {
        let exhibitionFormat = data.map(dataSingle => {
          let startDate = new Moment(dataSingle.exhibition.startDate);
          let endDate = new Moment(dataSingle.exhibition.endDate);
          let formatStart = startDate.format("MM/D/YY");
          let formatEnd = endDate.format("MM/D/YY");
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
        let exhibitionName = data.map(dataSingle => {
          return {
            exhibition: {
              name: dataSingle.exhibition.name,
              id: dataSingle.exhibition.exhibitionId
            }
          };
        });
        setExhibitions(exhibitionCurrent);
        console.log(exhibitionCurrent);
        setExhibitionsName(exhibitionName);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="home-view view">
      <h1>Museum Overview</h1>
      <div className="overview-list">
        <ExhibitionsOverview exhibitions={exhibitions} />
        <ArtworksOverview />
        <SensorsOverview exhibitions={exhibitionsName} />
      </div>
    </div>
  );
}
