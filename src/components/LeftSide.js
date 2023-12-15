import React from "react";
import LocationDegree from "./LocationDegree";

const LeftSide = () => {
  const today = new Date();
  const todayToShow = today.toDateString("default", { todayToShow: "short" });

  return (
    <div className="LeftSide">
      <div className="date">{todayToShow}</div>
      <LocationDegree />
    </div>
  );
};

export default LeftSide;
