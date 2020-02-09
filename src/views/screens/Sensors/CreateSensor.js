import React, { useState } from "react";

// MOVE FORM TO ITS OWN COMPONENT
// CreateSensor SCREEN ONLY CALLS ITS CHILD COMPONENTS

const CreateSensor = () => {
  /*=========================
      DECLARATIONS
  ===========================*/
  const newSensor = {
    sensorId: "",
    type: "",
    linkedEntity: {
      id: "", // Artwork/Quest ID
      name: "", // Artwork/Quest Name
      type: "" // Artwork/Quest
    }
  };
  const [sensor, setSensor] = useState(newSensor);
  const [availableArtworks, setAvailableArtworks] = useState([]);
  const [availableQuests, setAvailableQuests] = useState([]);

  /*=========================
      CUSTOM METHODS
  ===========================*/
  const handleSensorTypeChange = e => {
    setSensor({
      ...sensor,
      type: e.target.value
    });

    if (e.target.value === "bt") {
      // Call API to get a list of Quests that aren't already linked to a sensor
      const availableQuestsResponse = [
        { questId: 123, name: "Quest A" },
        { questId: 456, name: "Quest B" },
        { questId: 789, name: "Quest C" }
      ];
      setAvailableQuests(availableQuestsResponse);
    } else {
      // It's definitely NFC baby
      // Call API to get a list of Artworks that aren't already linked to a sensor
      const availableArtworksResponse = [
        { artworkId: 123, name: "Artwork A" },
        { artworkId: 456, name: "Artwork B" },
        { artworkId: 789, name: "Artwork C" }
      ];
      setAvailableArtworks(availableArtworksResponse);
    }
  };

  const handleCreateSensor = () => {
    // Call API to save the sensor details
    // Also, pass 'available' or 'linked' as the status depending on whether an entity is linked or not
    console.log(sensor);
  };

  /*=========================
      JSX (Duh.)
  ===========================*/
  return (
    <div>
      <h2>Create sensor</h2>
      <label htmlFor="sensorId">
        Sensor ID
        <input
          type="text"
          name="sensorId"
          id="sensorId"
          onChange={e =>
            setSensor({
              ...sensor,
              sensorId: e.target.value
            })
          }
        />
      </label>
      <label htmlFor="type">
        Type
        <select name="type" id="type" onChange={handleSensorTypeChange}>
          {/* This list can be populated through an API call if needed */}
          <option value="">Select sensor type</option>
          <option value="bt">Bluetooth (Quests)</option>
          <option value="nfc">NFC (Artwork)</option>
        </select>
      </label>
      {sensor.type === "bt" && (
        <label htmlFor="quest">
          Link to quest
          <select
            name="quest"
            id="quest"
            onChange={e =>
              setSensor({
                ...sensor,
                linkedEntity: {
                  id: e.target.value,
                  name: e.target[e.target.selectedIndex].text,
                  type: "quest"
                }
              })
            }
          >
            <option value="">Select quest</option>
            {availableQuests.map(quest => (
              <option value={quest.questId} key={quest.questId}>
                {quest.name}
              </option>
            ))}
          </select>
        </label>
      )}
      {sensor.type === "nfc" && (
        <label htmlFor="artwork">
          Link to artwork
          <select
            name="artwork"
            id="artwork"
            onChange={e => {
              setSensor({
                ...sensor,
                linkedEntity: {
                  id: e.target.value,
                  name: e.target[e.target.selectedIndex].text,
                  type: "quest"
                }
              });
            }}
          >
            {/* This list can be populated through an API call if needed */}
            <option value="">Select artwork</option>
            {availableArtworks.map(artwork => (
              <option value={artwork.artworkId} key={artwork.artworkId}>
                {artwork.name}
              </option>
            ))}
          </select>
        </label>
      )}
      <button onClick={handleCreateSensor}>Save sensor</button>
    </div>
  );
};

export default CreateSensor;
