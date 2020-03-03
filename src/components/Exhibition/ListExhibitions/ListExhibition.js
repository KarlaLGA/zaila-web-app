import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { get } from "services/zaila-api.js";
import Moment from "moment";

import ExhibitionItem from "./ExhibitionItem";

const ListArtwork = () => {
  // Retrieve selected filter form Redux
  const filterSelected = useSelector(state => state.exhibition.filterSelected);

  // Save exhibitions list as local state
  const [exhibitions, setExhibitions] = useState([]);

  useEffect(() => {
    get("exhibition")
      .then(data => {
        // Add status of the exhibition comparing to the current day
        const exhibitionsFilter = data.map(dataObject => {
          // Format date objects
          let startDate = new Moment(dataObject.exhibition.startDate);
          let endDate = new Moment(dataObject.exhibition.endDate);
          let formatStart = startDate.format("LL");
          let formatEnd = endDate.format("LL");
          let currentDay = new Moment(new Date());

          //Compare status of date
          let status;
          if (currentDay >= startDate && currentDay <= endDate) {
            status = "current";
          } else if (currentDay < startDate) {
            status = "future";
          } else if (currentDay > endDate) {
            status = "previous";
          }

          let exhibition = {
            ...dataObject.exhibition,
            startDate: formatStart,
            endDate: formatEnd,
            status: status
          };
          return { exhibition };
        });
        setExhibitions(exhibitionsFilter);
      })
      .catch(error => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {exhibitions
        .filter(({ exhibition }) => filterSelected === exhibition.status)
        .map(({ exhibition }) => (
          <ExhibitionItem
            key={exhibition.exhibitionId}
            exhibition={exhibition}
          />
        ))}
    </div>
  );
};

export default ListArtwork;
