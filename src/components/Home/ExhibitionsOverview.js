import React from "react";

import ExhibitionsList from "components/Home/Overview/Exhibition/ExhibitionsList";

const ExhibitionsOverview = () => {
  return (
    <div className="overview-item">
      <h2>Exhibitions</h2>

      <div className="total">
        <p>Current exhibitions: 15</p>
      </div>

      <ExhibitionsList />
    </div>
  );
};

export default ExhibitionsOverview;
