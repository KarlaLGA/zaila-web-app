import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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
import SettingsView from "./views/SettingsView";

function App() {
  const dispatch = useDispatch();
  const userLogged = useSelector(state => state.user.userLogged);

  useEffect(() => {
    if (localStorage.getItem("userData") !== null) {
      dispatch({ type: "USER_LOG_IN" });
    } else {
      dispatch({ type: "USER_LOG_OUT" });
    }
  }, [dispatch]);

  console.log(userLogged);

  return (
    <BrowserRouter>
      <main className={userLogged ? "app app-dashboard" : "app"}>
        {userLogged ? (
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
          <Route path="/dashboard/artifacts">
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
          <Route path="/dashboard/settings">
            <SettingsView />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
