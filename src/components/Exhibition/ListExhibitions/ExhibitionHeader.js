import React from "react";
import { useSelector, useDispatch } from "react-redux";

const ExhibitionHeader = () => {
  const dispatch = useDispatch();

  const filterSelected = useSelector(state => state.exhibition.filterSelected);

  return (
    <div className="section-header-exhibition">
      <div className="filters">
        <div className="prioritized-exhibitions">
          <div
            onClick={() =>
              dispatch({
                type: "SET_EXHIBITION_FILTER",
                payload: "current"
              })
            }
            className={
              filterSelected === "current"
                ? "filter-title selected"
                : "filter-title"
            }
          >
            <h2>Current</h2>
          </div>
          <div
            onClick={() =>
              dispatch({
                type: "SET_EXHIBITION_FILTER",
                payload: "future"
              })
            }
            className={
              filterSelected === "future"
                ? "filter-title selected"
                : "filter-title"
            }
          >
            <h2>Future</h2>
          </div>
        </div>
        <div
          onClick={() =>
            dispatch({
              type: "SET_EXHIBITION_FILTER",
              payload: "previous"
            })
          }
          className={
            filterSelected === "previous"
              ? "filter-title selected"
              : "filter-title"
          }
        >
          <h2>Previous</h2>
        </div>
      </div>
    </div>
  );
};

export default ExhibitionHeader;
