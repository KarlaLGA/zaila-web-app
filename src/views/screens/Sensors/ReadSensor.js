import React, { useState, useEffect } from "react";

const ReadSensor = props => {
  /*=========================
      DECLARATIONS
  ===========================*/
  // Parameter prop that's received from the URL
  const initSensor = { sensorId: props.match.params.id };
  const [sensor, setSensor] = useState(initSensor);

  // We might need an API to get a list of Artworks/Quests that aren't already linked to a sensor
  // const availableArtworkIds = [123, 456, 789];
  // const [availableArtworks, setAvailableArtworks] = useState(
  //   availableArtworkIds
  // );
  // Prettier is such a hypocrite. It'll indent the above block into multiple lines,
  // but will let the below line stay as it is
  // const availableQuestIds = [123, 456, 789];
  // const [availableQuests, setAvailableQuests] = useState(availableQuestIds);

  /*=========================
      LIFECYCLE METHODS / INITIALIZATION
  ===========================*/
  useEffect(() => {
    // Call API (pass with sensor.sensorId) to get the Sensor info
    const sensorResponse = {
      sensorId: sensor.sensorId,
      type: "bt",
      status: "linked",
      linkedEntity: {
        id: "666", // Artwork/Quest ID
        name: "Quest A", // Artwork/Quest Name
        type: "quest" // Artwork/Quest
      },
      exhibition: "Exhibition A"
    };
    setSensor(sensorResponse);
  }, [sensor.sensorId]);

  /*=========================
      CUSTOM METHODS
  ===========================*/
  // const handleUpdateSensor = () => {
  //   // Call API to udpate the sensor details
  //   console.log(sensor);
  // };

  return (
    <div>
      {sensor.linkedEntity && (
        <div>
          <h2>Read sensor</h2>
          <div>
            <b>Sensor ID: </b>
            {sensor.sensorId}
          </div>
          <div>
            <b>Sensor Type: </b>
            {sensor.type}
          </div>
          <div>
            <b>Status: </b>
            {sensor.status}
          </div>
          <div>
            <b>Linked {sensor.linkedEntity.type} : </b>
            {sensor.linkedEntity.name}
          </div>
          <div>
            <b>Exhibition : </b>
            {sensor.exhibition}
          </div>
        </div>
      )}
    </div>
    //   <label htmlFor="id">
    //     Sensor ID
    //     <input
    //       type="text"
    //       name="id"
    //       id="id"
    //       onChange={e =>
    //         setSensor({
    //           ...sensor,
    //           id: e.target.value
    //         })
    //       }
    //     />
    //   </label>
    //   <label htmlFor="type">
    //     Type
    //     <select
    //       name="type"
    //       id="type"
    //       onChange={e =>
    //         setSensor({
    //           ...sensor,
    //           type: e.target.value
    //         })
    //       }
    //     >
    //       {/* This list can be populated through an API call if needed */}
    //       <option value="">Select sensor type</option>
    //       <option value="bt">Bluetooth (Quests)</option>
    //       <option value="nfc">NFC (Artwork)</option>
    //     </select>
    //   </label>
    //   {sensor.type === "bt" && (
    //     <label htmlFor="quest">
    //       quest
    //       <select
    //         name="quest"
    //         id="quest"
    //         onChange={e =>
    //           setSensor({
    //             ...sensor,
    //             linkedEntityId: e.target.value,
    //             linkedEntityType: "quest"
    //           })
    //         }
    //       >
    //         <option value="">Select quest</option>
    //         <option value="1">Quest 1</option>
    //         <option value="2">Quest 2</option>
    //       </select>
    //     </label>
    //   )}
    //   {sensor.type === "nfc" && (
    //     <label htmlFor="artwork">
    //       artwork
    //       <select
    //         name="artwork"
    //         id="artwork"
    //         onChange={e =>
    //           setSensor({
    //             ...sensor,
    //             linkedEntityId: e.target.value,
    //             linkedEntityType: "artwork"
    //           })
    //         }
    //       >
    //         {/* This list can be populated through an API call if needed */}
    //         <option value="">Select artwork</option>
    //         <option value="1">Artwork 1</option>
    //         <option value="2">Artwork 2</option>
    //       </select>
    //     </label>
    //   )}
    //   <button onClick={handleUpdateSensor}>Save sensor</button>
    // </div>
  );
};

export default ReadSensor;
