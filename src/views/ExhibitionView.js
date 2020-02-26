import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import ListOf from 'views/screens/Exhibitions/ListOf';
import CreateExhibition from 'views/screens/Exhibitions/CreateExhibition'
import Exhibition from 'views/screens/Exhibitions/Exhibition';

const ExhibitionView = () => {

    let { path } = useRouteMatch();

    return (
        <div className="exhibition-view view">
            <Switch>
                    <Route exact path={ path } component={ ListOf }/>
                    <Route exact path={`${ path }/create`} component={ CreateExhibition }/>
                    <Route path={`${ path }/:exhibitionId`} component={ Exhibition }/>
            </Switch>
        </div>
    )
}

export default ExhibitionView;
