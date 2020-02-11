import React, { useState, useEffect } from "react";
import { getNfcSensors } from "../../../api/sensor";

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
      code: "att",
      text: "Attached"
    },
    {
      code: "det",
      text: "Detached"
    }
  ];

  /*=========================
      LIFECYCLE METHODS
  ===========================*/
  useEffect(() => {
    getNfcSensors()
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
  };
  /*=========================
      JSX (Duh.)
  ===========================*/
  return (
    <div>
      <div className="section-header">
        <h2 className="section-title">NFC Sensors</h2>
        <div>
          {filters.map((currFilter, id) => (
            <span
              onClick={() => setFilter(currFilter.code)}
              key={currFilter.code}
              className={currFilter.code === filter ? "active" : ""}
            >
              {currFilter.text}
              {id !== filters.length - 1 && " / "}
            </span>
          ))}
        </div>
      </div>
      <div id="sensors">
        {/* TODO Filter sensors based on the selected filter: all/attached/detached */}
        {/* Waiting for the API to be updated with the filter status */}
        {nfcSensors.map(nfcSensor => (
          <div className="sensor" key={nfcSensor.nfcSensorId}>
            <div>Sensor ID: {nfcSensor.nfcSensorId}</div>
            <div>Artwork Name: {nfcSensor.artworkName}</div>
            <div>Exhibition Name: {nfcSensor.exhibitionName}</div>
            {nfcSensor.status === "available" && (
              <div className="btn-wrapper">
                <button onClick={() => handleDetachNfc(nfcSensor.nfcSensorId)}>
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
