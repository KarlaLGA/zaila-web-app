import handleViewport from "react-in-viewport";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

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

  return (
    <div className="viewport-block" ref={forwardedRef}>
      <div style={{ height: "100vh", background: "#217ac0" }} />
      <p>Features</p>
    </div>
  );
};

const ViewportBlock = handleViewport(Block);

const Component = props => (
  <div>
    <div style={{ height: "100vh" }}>
      <h2>Scroll down to make component in viewport</h2>
    </div>
    <ViewportBlock
      onEnterViewport={() => console.log("enter")}
      onLeaveViewport={() => console.log("leave")}
    />
  </div>
);

export default Component;
