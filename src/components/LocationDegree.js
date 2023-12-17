import React from "react";
import { useSelector } from "react-redux";

const LocationDegree = () => {
  const weatherApiData = useSelector((state) => state?.weatherApiData);
  const selectcity = useSelector((state) => state?.selectcity);
  return (
    <div className="LocationDegree">
      <div className="LD-selectcity-tit">{selectcity}</div>
      <div className="LD-selectcity-degree">{weatherApiData.main.temp}°C</div>
    </div>
  );
};

export default LocationDegree;
