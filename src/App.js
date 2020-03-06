import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Nav from "./components/Home/Navigation/BarNav";
import TopNav from "./components/Home/Navigation/TopNav";
import Logo from "./components/Home/Navigation/Logo";
import LandingPageView from "./views/LandingPageView";
import LogInView from "./views/LogInView";
import HomeView from "./views/HomeView";
import ArtworkView from "./views/ArtworkView";
import SensorView from "./views/SensorView";
import ReportView from "./views/ReportView";
import ExhibitionView from "./views/ExhibitionView";
import QuestView from "./views/QuestView";

function App() {
  return (
    <BrowserRouter>
      <main
        className={
          localStorage.getItem("userData") !== null
            ? "app app-dashboard"
            : "app"
        }
      >
        {localStorage.getItem("userData") !== null ? (
          <>
            <Logo />
            <TopNav />
            <Nav />
          </>
        ) : (
          <></>
        )}

        <Switch>
          <Route exact path="/">
            <LandingPageView />
          </Route>
          <Route path="/login">
            <LogInView />
          </Route>
          <Route exact path="/dashboard">
            <HomeView />
          </Route>
          <Route path="/dashboard/artworks">
            <ArtworkView />
          </Route>
          <Route path="/dashboard/sensors">
            <SensorView />
          </Route>
          <Route path="/dashboard/reports">
            <ReportView />
          </Route>
          <Route path="/dashboard/exhibitions">
            <ExhibitionView />
          </Route>
          <Route path="/dashboard/quests">
            <QuestView />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
