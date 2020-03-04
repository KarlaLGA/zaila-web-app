import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import ListOf from "./screens/Artworks/ListOf";
import CreateArtwork from "./screens/Artworks/CreateArtwork";
import Artwork from "./screens/Artworks/Artwork";

const ArtworkView = () => {
  let { path } = useRouteMatch();

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
