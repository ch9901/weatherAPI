import React from "react";
import { useSelector } from "react-redux";

export const DataDetail = () => {
  const weatherApiData = useSelector((state) => state.weatherApiData);
  console.log(weatherApiData);
  const maxTemp = weatherApiData?.main.temp_max;
  const minTemp = weatherApiData?.main.temp_min;
  const currentTemp = weatherApiData?.main.temp;
  const humidity = weatherApiData?.main.humidity;
  const wind = weatherApiData?.wind.speed;

  return (
    <div className="DataDetail">
      <div className="datalist">
        <span className="data-tit">Current Temp</span>
        <span className="data-result">{currentTemp}</span>
      </div>
      <div className="datalist">
        <span className="data-tit">Max/Min Temp</span>
        <span className="data-result">
          {maxTemp}°C /{minTemp} °C
        </span>
      </div>
      <div className="datalist">
        <span className="data-tit">Humidty</span>
        <span className="data-result">{humidity}%</span>
      </div>
      <div className="datalist">
        <span className="data-tit">Wind</span>
        <span className="data-result">{wind}km/h</span>
      </div>
    </div>
  );
};
