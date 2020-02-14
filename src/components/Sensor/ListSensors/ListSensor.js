import React from "react";
import { useSelector } from "react-redux";
import SensorItem from "components/Sensor/ListSensors/SensorItem";

const ListSensor = props => {
  /*=========================
      RECEIVE VALUES FROM 
      REDUX STORE
  ===========================*/
  // sensorObjs will contain data about the sensor itelf,
  // plus the entity (artwork/quest) as well as the exhibition to which they belong
  const { sensors: sensorObjs, filter: appliedFilter } = useSelector(
    state => state.sensor
  );

  /*=========================
      JSX (Duh.)
  ===========================*/
  return (
    <div id="sensors">
      {/* First, filter the sensors based on the selected filter (All / Attached / Detached) */}
      {sensorObjs
        .filter(
          sensorObj =>
            appliedFilter === "all" || sensorObj.sensor.status === appliedFilter
        )
        // Then loop through them and display each one of it
        .map(sensorObj => (
          // The entity prop below can represent either an artwork or quest
          // NFC Sensors will have artworks, while Bluetooth sensors will have quests
          <SensorItem
            key={sensorObj.sensor.sensorId}
            sensor={sensorObj.sensor}
            entityType={
              sensorObj.artwork ? "Artwork" : sensorObj.quest && "Quest"
            }
            entity={sensorObj.artwork || sensorObj.quest}
            exhibition={sensorObj.exhibition}
          />
        ))}
    </div>
  );
};

export default ListSensor;
