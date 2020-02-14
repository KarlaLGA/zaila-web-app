import React from "react";
import { useSelector, useDispatch } from "react-redux";

const SensorHeader = props => {
  /*=========================
      INIT
  ===========================*/
  const dispatch = useDispatch();

  /*=========================
      RECEIVE VALUES FROM 
      REDUX STORE AND PROPS
  ===========================*/
  const { title } = props;
  const { filter } = useSelector(state => state.sensor);

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
      JSX (Duh.)
  ===========================*/
  return (
    <div className="section-header">
      <h2 className="section-title">{title}</h2>
      <div>
        {/* Display the list of filters at the top right corner */}
        {filters.map((currFilter, id) => (
          <span
            onClick={() =>
              dispatch({ type: "SET_SENSORS_FILTER", payload: currFilter.code })
            }
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
  );
};

export default SensorHeader;
