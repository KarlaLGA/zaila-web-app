import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { get } from "services/zaila-api";
import SensorItem from "components/Sensor/ListSensors/SensorItem";

const ListSensor = props => {
  /*=========================
      RECEIVE VALUES FROM REDUX STORE 
      AND LOCAL STATE(S)
  ===========================*/
  // sensorObjs will contain data about the sensor itelf,
  // plus the entity (artwork/quest) as well as the exhibition to which they belong
  const { filter: appliedFilter } = useSelector(state => state.sensor);
  const [sensorObjs, setSensorObjs] = useState([]);

  /*=========================
      LIFECYCLE METHODS
  ===========================*/
  useEffect(() => {
    get("sensor")
      .then(data => {
        setSensorObjs(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

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
