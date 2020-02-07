import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import ListOf from './screens/Artworks/ListOf';
import CreateArtwork from './screens/Artworks/CreateArtwork';
import SingleArtwork from './screens/Artworks/SingleArtwork';

export default function ArtworkView() {

    let { path } = useRouteMatch();

    return (
        <div>

            <Switch>
                    <Route exact path={ path } component={ListOf}/>
                    <Route exact path={`${ path }/create`} component={CreateArtwork}/>
                    <Route path={`${ path }/:artworkId`} component={SingleArtwork}/>
            </Switch>

        </div>
    )
}
