import React, { useState, useEffect } from "react";
import { get } from "services/zaila-api";

const ListOf = () => {
  /*=========================
      STATES
  ===========================*/
  const [nfcSensors, setNfcSensors] = useState([]);
  const [filter, setFilter] = useState("all");

  /*=========================
      CONSTANTS
  ===========================*/
  const filters = [
    {
      code: "all",
      text: "Show All"
    },
    {
      code: "linked",
      text: "Attached"
    },
    {
      code: "Available",
      text: "Detached"
    }
  ];

  /*=========================
      LIFECYCLE METHODS
  ===========================*/
  useEffect(() => {
    get("sensor")
      .then(data => {
        setNfcSensors(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  /*=========================
      CUSTOM METHODS
  ===========================*/
  const handleDetachNfc = nfcSensorId => {
    // Call API to detach the sensor from it's linked artwork
    console.log(`Detch NFC called. Sensor ID is: ${nfcSensorId}`);
  };
  /*=========================
      JSX (Duh.)
  ===========================*/
  return (
    <div>
      <div className="section-header">
        <h2 className="section-title">NFC Sensors</h2>
        <div>
          {/* Display the list of filters at the top right corner */}
          {filters.map((currFilter, id) => (
            <span
              onClick={() => setFilter(currFilter.code)}
              key={currFilter.code}
              className={currFilter.code === filter ? "active" : ""}
            >
              {currFilter.text}
              {/* Add "/" next to the filter if it isn't the last one */}
              {id !== filters.length - 1 && " / "}
            </span>
          ))}
        </div>
      </div>
      <div id="sensors">
        {nfcSensors
          .filter(
            nfcSensor => filter === "all" || nfcSensor.sensor.status === filter
          )
          .map(nfcSensor => (
            <div className="sensor" key={nfcSensor.sensor.sensorId}>
              <div>Sensor ID: {nfcSensor.sensor.sensorId}</div>
              <div>
                Artwork Name:{" "}
                {nfcSensor.artwork ? nfcSensor.artwork.title : "NA"}
              </div>
              <div>
                Exhibition Name:{" "}
                {nfcSensor.exhibition ? nfcSensor.exhibition.name : "NA"}
              </div>
              {nfcSensor.sensor.status === "linked" && (
                <div className="btn-wrapper">
                  <button
                    onClick={() => handleDetachNfc(nfcSensor.sensor.sensorId)}
                  >
                    Detach
                  </button>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ListOf;
