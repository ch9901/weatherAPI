import React from "react";
import { useSelector } from "react-redux";

const LocationDegree = () => {
  const jsondata = useSelector((state) => state.jsondata);
  console.log(jsondata);
  return <div className="LocationDegree">dd</div>;
};

export default LocationDegree;
