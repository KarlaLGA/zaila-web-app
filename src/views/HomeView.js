import React from "react";

import ExhibitionsOverview from "components/Home/ExhibitionsOverview";
import ArtworksOverview from "components/Home/ArtworksOverview";
import SensorsOverview from "components/Home/SensorsOverview";

export default function HomeView() {
  return (
    <div className="home-view view">
      <h1>Overview</h1>
      <div className="overview-list">
        <ExhibitionsOverview />
        <ArtworksOverview />
        <SensorsOverview />
      </div>
    </div>
  );
}
