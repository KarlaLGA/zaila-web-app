import React, { useEffect, useState } from "react";
import { get } from "services/zaila-api.js";

const SensorsOverview = props => {
  const exhibitions = props.exhibitions;

  const [sensorsConnected, setSensorsConnected] = useState([]);
  const [sensorsAvailable, setSensorsAvailable] = useState([]);

  useEffect(() => {
    get("sensor")
      .then(data => {
        let connected = data.filter(sensor => {
          if (sensor.artwork) {
            return true;
          } else {
            return false;
          }
        });
        let available = data.filter(sensor => {
          if (sensor.artwork === undefined) {
            return true;
          } else {
            return false;
          }
        });
        setSensorsConnected(connected);
        setSensorsAvailable(available);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="overview-item">
      <h2>Sensors</h2>

      <div className="total">
        <p>NFC sensors connected: {sensorsConnected.length}</p>
        <p>NFC sensors available: {sensorsAvailable.length}</p>
      </div>
    </div>
  );
};

export default SensorsOverview;
