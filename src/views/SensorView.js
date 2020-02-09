import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import ListOf from "./screens/Sensors/ListOf";
// import CreateSensor from "./screens/Sensors/CreateSensor";
// import ReadSensor from "./screens/Sensors/ReadSensor";

const SensorView = () => {
  let { path } = useRouteMatch();

  return (
    <div className="sensor-view view">
      <p>Sensor View</p>

      <Switch>
        {/* ListOf component contains a link to create new sensor */}
        <Route exact path={path} component={ListOf} />
        {/* <Route path={`${path}/create`} component={CreateSensor} />
        <Route path={`${path}/:id`} component={ReadSensor} /> */}
      </Switch>
    </div>
  );
};

export default SensorView;
