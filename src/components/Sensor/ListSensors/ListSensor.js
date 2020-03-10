import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { get } from "services/zaila-api";
import SensorItem from "components/Sensor/ListSensors/SensorItem";

const ListSensor = props => {
  /*=========================
      RECEIVE VALUES FROM REDUX STORE 
      AND LOCAL STATE(S)
  ===========================*/
  const { filter: appliedFilter } = useSelector(state => state.sensor);
  const [sensorNfc, setSensorNfc] = useState([]);
  const [sensorBluetooth, setSensorBluetooth] = useState([]);

  /*=========================
      LIFECYCLE METHODS
  ===========================*/
  useEffect(() => {
    get("sensor")
      .then(data => {
        setSensorNfc(data);
      })
      .catch(error => {
        console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    get("bluetooth")
      .then(data => {
        setSensorBluetooth(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleBluetooth = () => {
    return sensorBluetooth.map(bluetooth => (
      <SensorItem
        key={bluetooth.bluetoothSensor.bluetoothId}
        sensor={bluetooth.bluetoothSensor.bluetoothId}
        entity={bluetooth.quest}
        entityType="Quest"
        exhibition={bluetooth.exhibition}
      />
    ));
  };

  const handleNfc = () => {
    return sensorNfc.map(nfc => (
      <SensorItem
        key={nfc.sensor.sensorId}
        sensor={nfc.sensor.sensorId}
        entity={nfc.artwork}
        entityType="Artwork"
        exhibition={nfc.exhibition}
      />
    ));
  };

  /*=========================
      JSX (Duh.)
  ===========================*/
  return (
    <div id="sensors" className="list-view">
      {appliedFilter === "Bluetooth" ? handleBluetooth() : handleNfc()}
    </div>
  );
};

export default ListSensor;
