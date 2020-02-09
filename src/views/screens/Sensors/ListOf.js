import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ListOf = () => {
  /*=========================
      DECLARATIONS
  ===========================*/
  const [nfcSensors, setNfcSensors] = useState([]);
  // const [btSensors, setBtSensors] = useState([]);

  /*=========================
      STYLES
  ===========================*/
  const styles = {
    list: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    },
    available: {
      color: "green"
    },
    linked: {
      color: "lightgrey"
    }
  };

  /*=========================
      LIFECYCLE METHODS
  ===========================*/
  useEffect(() => {
    // Call API to get the list of all Bluetooth sensors
    // const btSensorsResponse = [
    //   { sensorId: "123", status: "available" },
    //   { sensorId: "456", status: "linked" },
    //   { sensorId: "789", status: "available" }
    // ];
    // setBtSensors(btSensorsResponse);

    // Call API to get the list of all NFC sensors
    const nfcSensorsResponse = [
      { sensorId: "123", status: "available" },
      { sensorId: "456", status: "linked" },
      { sensorId: "789", status: "available" }
    ];
    setNfcSensors(nfcSensorsResponse);
  }, []);

  /*=========================
      CUSTOM METHODS
  ===========================*/
  // const handleRemoveNfc = sensorId => {
  //   // Call API and pass the sensor ID for removal
  //   setNfcSensors(
  //     nfcSensors.filter(nfcSensor => nfcSensor.sensorId !== sensorId)
  //   );

  //   // Should the getNfcSensors API be called again after removing it?
  //   // Or is it okay to simply remove it from the component state?
  // };
  // Prettier is such a hypocrite. It'll indent the above block into multiple lines,
  // but will let the below line stay as it is
  // const handleRemoveBt = sensorId => {
  //   // Call API and pass the sensor ID for removal
  //   setBtSensors(btSensors.filter(btSensor => btSensor.sensorId !== sensorId));

  //   // Should the getBtSensors API be called again after removing it?
  //   // Or is it okay to simply remove it from the component state?
  // };

  /*=========================
      JSX (Duh.)
  ===========================*/
  return (
    <div>
      {/* <h1>Sensors</h1> */}
      {/* <Link to="/sensors/create">Create a new Sensor</Link> */}

      <h2>NFC Sensors</h2>
      {nfcSensors.map(nfcSensor => (
        <div style={styles.list} key={nfcSensor.sensorId}>
          <Link to={`/sensor/${nfcSensor.sensorId}`}>
            <h3>{nfcSensor.sensorId}</h3>
          </Link>
          <h3 style={styles[nfcSensor.status]}>{nfcSensor.status}</h3>
          {/* <button onClick={() => handleRemoveNfc(nfcSensor.sensorId)}>
            Remove
          </button> */}
        </div>
      ))}
      {/* Just wondering, can these two be rendered by a single loop?
      Depends on the structure of the API call
      I mean, if there are two separate API calls for both sensors, it has to be done this way
      Else, the API can provide two objects, one for Bluetooth and one for NFC each containing an array of it's sensors
      That'd make it easy to render this list through one single loop */}
      {/* <h2>Bluetooth Sensors (for Quests)</h2>
      {btSensors.map(btSensor => (
        // Dont worry, I'll replace this with a React router link
        <div style={styles.list} key={btSensor.sensorId}>
          <Link to={`/sensor/${btSensor.sensorId}`}>
            <h3>{btSensor.sensorId}</h3>
          </Link>
          <h3 style={styles[btSensor.status]}>{btSensor.status}</h3>
          <button onClick={() => handleRemoveBt(btSensor.sensorId)}>
            Remove
          </button>
        </div>
      ))} */}
    </div>
  );
};

export default ListOf;
