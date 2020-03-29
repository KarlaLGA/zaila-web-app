import React, { useEffect, useState } from "react";
import { get } from "services/zaila-api.js";

import SensorList from "./Overview/Sensor/SensorList";

const SensorsOverview = props => {
  const exhibitions = props.exhibitions;
  const artworks = props.artworks;
  const bluetooth = props.bluetooth;
  console.log(bluetooth);

  const [sensorsConnected, setSensorsConnected] = useState([]);
  const [sensorsAvailable, setSensorsAvailable] = useState([]);
  const [sensorExhibition, setSensorExhibition] = useState([]);

  useEffect(() => {
    const exhibitionsAvailable = exhibitions.map(exhibition => ({
      exhibitionId: exhibition.exhibitionId,
      artworksTotal: 0,
      exhibitionName: exhibition.name
    }));

    artworks.map(artwork => {
      exhibitionsAvailable.map(exhibition => {
        if (artwork.exhibitionId === exhibition.exhibitionId) {
          exhibition.artworksTotal++;
        }
        return true;
      });
      return true;
    });
    const exhibitionsWithArtworks = exhibitionsAvailable.filter(
      exhibition => exhibition.artworksTotal !== 0
    );
    setSensorExhibition(exhibitionsWithArtworks);
  }, [artworks, exhibitions]);

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
        <p>
          Bluetooth sensors: <span className="number">{bluetooth}</span>
        </p>
        <p>
          NFC sensors connected:{" "}
          <span className="number">{sensorsConnected.length}</span>
        </p>
        <p>
          NFC sensors available:{" "}
          <span className="number">{sensorsAvailable.length}</span>
        </p>
      </div>

      <SensorList exhibitions={sensorExhibition} />
    </div>
  );
};

export default SensorsOverview;
