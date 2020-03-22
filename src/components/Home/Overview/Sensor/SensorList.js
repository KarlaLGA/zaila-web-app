import React from "react";

import SensorItem from "./SensorItem";

const SensorList = props => {
  const exhibitions = props.exhibitions;

  return (
    <div>
      {exhibitions.map((exhibition, index) => (
        <SensorItem exhibition={exhibition} key={index} />
      ))}
    </div>
  );
};

export default SensorList;
