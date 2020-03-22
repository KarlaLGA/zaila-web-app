import React from "react";

import ExhibitionsList from "components/Home/Overview/Exhibition/ExhibitionsList";

const ExhibitionsOverview = props => {
  const exhibitions = props.exhibitions;

  return (
    <div className="overview-item">
      <h2>Exhibitions</h2>

      <div className="total">
        <p>
          Current exhibitions:{" "}
          <span className="number">{exhibitions.length}</span>
        </p>
      </div>

      <ExhibitionsList exhibitions={exhibitions} />
    </div>
  );
};

export default ExhibitionsOverview;
