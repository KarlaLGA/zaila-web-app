import React, { useEffect, useState } from "react";
import { get } from "services/zaila-api.js";
import Moment from "moment";

import ExhibitionsList from "components/Home/Overview/Exhibition/ExhibitionsList";

const ExhibitionsOverview = () => {
  const [exhibitions, setExhibitions] = useState([]);
  useEffect(() => {
    get("exhibition")
      .then(data => {
        let exhibitionFormat = data.map(dataSingle => {
          let startDate = new Moment(dataSingle.exhibition.startDate);
          let endDate = new Moment(dataSingle.exhibition.endDate);
          let formatStart = startDate.format("MM/D");
          let formatEnd = endDate.format("MM/D");
          return {
            exhibition: {
              name: dataSingle.exhibition.name,
              duration: `${formatStart} - ${formatEnd}`
            }
          };
        });
        setExhibitions(exhibitionFormat);
      })
      .catch(error => console.log(error));
  }, []);

  console.log(exhibitions);

  return (
    <div className="overview-item">
      <h2>Exhibitions</h2>

      <div className="total">
        <p>Current exhibitions: {exhibitions.length}</p>
      </div>

      <ExhibitionsList exhibitions={exhibitions} />
    </div>
  );
};

export default ExhibitionsOverview;
