import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import ListOf from './screens/Artworks/ListOf';
import CreateArtwork from './screens/Artworks/CreateArtwork';

export default function ArtworkView() {

    let { path } = useRouteMatch();

    return (
        <div>

            <Switch>
                    <Route exact path={path} component={ListOf}/>
                    <Route to={`${path}/create`} component={CreateArtwork}/>
            </Switch>

        </div>
    )
}
