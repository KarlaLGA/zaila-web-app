import React from "react";

const SensorItem = props => {
  /*=========================
      RECEIVE PROPS
  ===========================*/
  let { sensor, entityType, entity, exhibition } = props;

  /*=========================
      CUSTOM METHODS
  ===========================*/
  const handleDetach = sensorId => {
    // Call API to detach the sensor from it's linked entity
    console.log(`Detch sensor called. Sensor ID is: ${sensorId}`);
  };

  /*=========================
      JSX (Duh.)
  ===========================*/
  return (
    <div className="sensor" key={sensor.sensorId}>
      <div>Sensor ID: {sensor.sensorId}</div>
      <div>
        {entityType} Name: {entity ? entity.title : "NA"}
      </div>
      <div>Exhibition Name: {exhibition ? exhibition.name : "NA"}</div>
      {sensor.status === "linked" && (
        <div className="btn-wrapper">
          <button onClick={() => handleDetach(sensor.sensorId)}>Detach</button>
        </div>
      )}
    </div>
  );
};

export default SensorItem;
