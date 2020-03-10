import React from "react";
import { useSelector, useDispatch } from "react-redux";

const SensorHeader = () => {
  /*=========================
      INIT
  ===========================*/
  const dispatch = useDispatch();

  /*=========================
      RECEIVE VALUES FROM 
      REDUX STORE AND PROPS
  ===========================*/
  const { filter } = useSelector(state => state.sensor);

  /*=========================
      CONSTANTS
  ===========================*/
  const filters = [
    {
      text: "Bluetooth"
    },
    {
      text: "NFC"
    }
  ];

  /*=========================
      JSX (Duh.)
  ===========================*/
  return (
    <div className="section-header">
      <div className="filters">
        {/* Display the list of filters at the top right corner */}
        {filters.map(currFilter => (
          <span
            onClick={() =>
              dispatch({ type: "SET_SENSORS_FILTER", payload: currFilter.text })
            }
            key={currFilter.text}
            className={
              currFilter.text === filter
                ? "filter-title selected"
                : "filter-title"
            }
          >
            <h2>{currFilter.text}</h2>
          </span>
        ))}
      </div>
    </div>
  );
};

export default SensorHeader;
