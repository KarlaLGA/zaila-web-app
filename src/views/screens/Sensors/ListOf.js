import React from "react";
import ListSensor from "../../../components/Sensor/ListSensors/ListSensor";
import SensorHeader from "../../../components/Sensor/ListSensors/SensorHeader";

const ListOf = () => {
  /*=========================
      JSX (Duh.)
  ===========================*/
  return (
    <div className="list">
      <div className="section-header">
        <h1>Sensors</h1>
      </div>
      <SensorHeader title="NFC Sensors" />
      <ListSensor />
    </div>
  );
};

export default ListOf;
