import React from "react";
import ListSensor from "../../../components/Sensor/ListSensors/ListSensor";
import SensorHeader from "../../../components/Sensor/ListSensors/SensorHeader";

const ListOf = () => {
  /*=========================
      JSX (Duh.)
  ===========================*/
  return (
    <div className="list">
      <h1>Sensors</h1>
      <SensorHeader title="NFC Sensors" />
      <ListSensor />
    </div>
  );
};

export default ListOf;
