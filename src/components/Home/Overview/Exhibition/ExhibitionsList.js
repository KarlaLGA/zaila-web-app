import React from "react";

import ExhibitionItem from "components/Home/Overview/Exhibition/ExhibitionItem";

const ExhibitionsList = props => {
  const data = props.exhibitions;
  return (
    <div>
      {data.map((exhibition, index) => (
        <ExhibitionItem exhibition={exhibition.exhibition} key={index} />
      ))}
    </div>
  );
};

export default ExhibitionsList;
