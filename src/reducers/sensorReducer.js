const initState = {
  sensors: [],
  filter: "Bluetooth"
};

const sensorReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_SENSORS_FILTER":
      return {
        ...state,
        filter: action.payload
      };

    default:
      return state;
  }
};

export default sensorReducer;
