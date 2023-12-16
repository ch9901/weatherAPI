import React from "react";
import { DataDetail } from "./DataDetail";
import { useSelector } from "react-redux";

const DataShow = () => {
  const city = useSelector((state) => state.selectcity);
  return (
    <div>
      <h1 className="datashow-tit">Weather Detail of {city}</h1>
      <DataDetail />
    </div>
  );
};

export default DataShow;
