import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { get } from "services/zaila-api";
import ListSensor from "../../../components/Sensor/ListSensors/ListSensor";
import SensorHeader from "../../../components/Sensor/ListSensors/SensorHeader";

const ListOf = () => {
  /*=========================
      INIT
  ===========================*/
  const dispatch = useDispatch();

  /*=========================
      LIFECYCLE METHODS
  ===========================*/
  // HELP, fellow developers!
  // Should this function be here, or should it be inside <ListSensor />?
  // I think I read somewhere that there's a design pattern in react which says that:
  // Child components (in our case ListSensor) shouldn't have their own state
  // HERE IT IS! I wrote this down this note while studying React at codecademy.com
  //    "One of the important design patterns while developing apps in React is that
  //    you should have Stateful Parent Components and Stateless Child Components.
  //    The values should be passed down from the Parent to the Child via props."
  // In our case, we're dispatching the state from the parent and then using it inside the child component
  // Otherwise, we'd have to have a state inside <ListSensor />, which is against this principle
  useEffect(() => {
    get("sensor")
      .then(data => {
        dispatch({ type: "SET_SENSORS", payload: data });
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  /*=========================
      JSX (Duh.)
  ===========================*/
  return (
    <div>
      {/* We might change the API to get both NFC sensors and Bluetooth sensors in the future */}
      {/* I can remove the hardcoding here once the API provides me this title */}
      <SensorHeader title="NFC Sensors" />
      <ListSensor />
    </div>
  );
};

export default ListOf;
