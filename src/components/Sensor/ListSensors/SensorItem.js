import React from "react";

const SensorItem = props => {
  /*=========================
      RECEIVE PROPS
  ===========================*/
  let { sensor, entityType, entity, exhibition } = props;

  const handleEntity = () => {
    if (entityType === "Quest" && entity !== undefined) {
      return (
        <div className="status">
          <div>
            {entityType}: {entity.name}
          </div>
          <div>Exhibition: {exhibition.name}</div>
        </div>
      );
    } else if (entityType === "Artwork" && entity !== undefined) {
      return (
        <div className="status">
          <div>
            {entityType}: {entity.title}
          </div>
          <div>Exhibition: {exhibition.name}</div>
        </div>
      );
    } else {
      return <div>Not connected</div>;
    }
  };

  /*=========================
      JSX (Duh.)
  ===========================*/
  return (
    <div className="sensor" key={sensor}>
      <div>Sensor ID: {sensor}</div>
      {handleEntity()}
    </div>
  );
};

export default SensorItem;
