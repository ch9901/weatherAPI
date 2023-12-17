import React from "react";
import SelectCity from "./SelectCity";
import DataShow from "./DataShow";

const RightSide = (handleCityChange) => {
  return (
    <div className="RightSide">
      <SelectCity SelectCity={handleCityChange} />
      <DataShow />
    </div>
  );
};

export default RightSide;
