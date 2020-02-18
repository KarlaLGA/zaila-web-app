import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Nav from "./components/Home/Nav";
import HomeView from "./views/HomeView";
import ArtworkView from "./views/ArtworkView";
import SensorView from "./views/SensorView";
import ReportView from "./views/ReportView";
import ExhibitionView from './views/ExhibitionView';
import QuestView from './views/QuestView';

function App() {
  return (
    <BrowserRouter>
      <main className="app">
        <Nav />

        <Switch>
          <Route exact path="/">
            <HomeView />
          </Route>
          <Route path="/artworks">
            <ArtworkView />
          </Route>
          <Route path="/sensors">
            <SensorView />
          </Route>
          <Route path="/reports">
            <ReportView />
          </Route>
          <Route path="/exhibitions">
            <ExhibitionView />
          </Route>
          <Route path="/quests">
            <QuestView />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
