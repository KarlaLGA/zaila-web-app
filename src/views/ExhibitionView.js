import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import ListOf from './screens/Exhibitions/ListOf';
import Exhibition from 'views/screens/Exhibitions/Exhibition'

const ExhibitionView = () => {

    let { path } = useRouteMatch();

    return (
        <div className="exhibition-view view">
            <Switch>
                    <Route exact path={ path } component={ ListOf }/>
                    {/* <Route exact path={`${ path }/create`} component={ CreateArtwork }/> */}
                    <Route path={`${ path }/:exhibitionId`} component={ Exhibition }/>
            </Switch>
        </div>
    )
}

export default ExhibitionView;
