import React from "react";
import ListSensor from "../../../components/Sensor/ListSensors/ListSensor";
import SensorHeader from "../../../components/Sensor/ListSensors/SensorHeader";

const ListOf = () => {
  /*=========================
      JSX (Duh.)
  ===========================*/
  return (
    <div>
      <SensorHeader title="NFC Sensors" />
      <ListSensor />
    </div>
  );
};

export default ListOf;
