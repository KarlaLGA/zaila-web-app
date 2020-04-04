import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import ListOf from "views/screens/Exhibitions/ListOf";
import CreateExhibition from "views/screens/Exhibitions/CreateExhibition";
import Exhibition from "views/screens/Exhibitions/Exhibition";

const ExhibitionView = () => {
  let { path } = useRouteMatch();
  const dispatch = useDispatch();

  let categories = [
    {
      categoryId: 1,
      categoryName: "Artwork",
      image: "/assets/icons/exhibitionArtwork.svg"
    },
    {
      categoryId: 2,
      categoryName: "Photography",
      image: "/assets/icons/exhibitionPhotography.svg"
    },
    {
      categoryId: 3,
      categoryName: "Nature",
      image: "/assets/icons/exhibitionNature.svg"
    },
    {
      categoryId: 4,
      categoryName: "Astronomy",
      image: "/assets/icons/exhibitionAstronomy.svg"
    }
  ];

  useEffect(() => {
    dispatch({ type: "SET_CATEGORIES", payload: categories });
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
