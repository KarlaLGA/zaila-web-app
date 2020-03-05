import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import { get } from "services/zaila-api";

import ListOf from "./screens/Artworks/ListOf";
import CreateArtwork from "./screens/Artworks/CreateArtwork";
import Artwork from "./screens/Artworks/Artwork";

const ArtworkView = () => {
  let { path } = useRouteMatch();
  const dispatch = useDispatch();

  useEffect(() => {
    get("exhibition").then(data => {
      dispatch({ type: "SET_EXHIBITIONS", payload: data });
    });
  });

  return (
    <div className="artwork-view view">
      <Switch>
        <Route exact path={path} component={ListOf} />
        <Route exact path={`${path}/create`} component={CreateArtwork} />
        <Route path={`${path}/:artworkId`} component={Artwork} />
      </Switch>
    </div>
  );
};

export default ArtworkView;
