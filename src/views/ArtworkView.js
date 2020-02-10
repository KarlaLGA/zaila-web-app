import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import ListOf from './screens/Artworks/ListOf';
import CreateArtwork from './screens/Artworks/CreateArtwork';
import Artwork from './screens/Artworks/Artwork';

export default function ArtworkView() {

    let { path } = useRouteMatch();

    // FETCH THE LIST FORM THE API, AND PASS IT AS PROPS IN THE LISTOF COMPONENT
    // USE USESTATE TO SET THE DATA

    return (
        <div>

            <Switch>
                    {/* <Route exact path={ path }>
                        <ListOf artwork={artworkList}/>
                    </Route> */}
                    <Route exact path={ path } component={ ListOf }/>
                    <Route exact path={`${ path }/create`} component={ CreateArtwork }/>
                    <Route path={`${ path }/:artworkId`} component={ Artwork }/>
            </Switch>

        </div>
    )
}
