import React from "react";
import { useSelector } from "react-redux";

const Component = props => {
  const navClass = useSelector(state => state.user.navBar);

  return (
    <div>
      <div className={navClass ? "full" : "simplified"}>
        <h1>NavBar</h1>
      </div>
    </div>
  );
};

export default Component;
