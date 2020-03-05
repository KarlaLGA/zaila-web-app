import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import { get } from "services/zaila-api";

import ListOf from "views/screens/Exhibitions/ListOf";
import CreateExhibition from "views/screens/Exhibitions/CreateExhibition";
import Exhibition from "views/screens/Exhibitions/Exhibition";

const ExhibitionView = () => {
  let { path } = useRouteMatch();
  const dispatch = useDispatch();

  useEffect(() => {
    get("exhibition/category").then(data => {
      dispatch({ type: "SET_CATEGORIES", payload: data });
    });
  });

  return (
    <div className="exhibition-view view">
      <Switch>
        <Route exact path={path} component={ListOf} />
        <Route exact path={`${path}/create`} component={CreateExhibition} />
        <Route path={`${path}/:exhibitionId`} component={Exhibition} />
      </Switch>
    </div>
  );
};

export default ExhibitionView;
