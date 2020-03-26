import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import handleViewport from "react-in-viewport";

const Block = props => {
  const dispatch = useDispatch();
  const { inViewport, forwardedRef } = props;

  console.log(inViewport);

  useEffect(() => {
    if (inViewport) {
      dispatch({ type: "CHANGE_NAVBAR_STATE" });
    } else {
      dispatch({ type: "CHANGE_NAVBAR_STATE" });
    }
  }, [inViewport, dispatch]);

  return <h1 ref={forwardedRef}>My name is Zaila</h1>;
};

const ViewportBlock = handleViewport(Block);

const Nav = props => {
  return (
    <div className="hero home-view" id="hero">
      <div className="welcome-message">
        <img src="/assets/images/Zaila.svg" alt="Zaila logo" />
        <h1>Hello!</h1>
        <ViewportBlock
          onEnterViewport={() => console.log("enter")}
          onLeaveViewport={() => console.log("leave")}
        />
      </div>
      <div className="app-description">
        <div className="description">
          <p>
            Zaila is the personification of our new tour app. She is a historian
            and a facilitator that will guide your visit through a museum to be
            more enjoyable, fun and efficient.
          </p>
          <p>
            Her main focus is making the experience of visiting an exhibition
            more interactive, informative and efficient.
          </p>
        </div>

        <div className="download-buttons">
          <img src="/assets/images/apple.svg" alt="download apple store" />
          <img src="/assets/images/google.svg" alt="download play store" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
