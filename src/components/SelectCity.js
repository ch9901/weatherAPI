import React from "react";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { useDispatch } from "react-redux";

const SelectCity = () => {
  const dispatch = useDispatch();
  const city = useSelector((state) => state.jsondata);
  const buttonOnClick = (e) => {
    const clickedButton = e.target;
    clickedButton.classList.add("selected");
    dispatch({ type: "SELECT_CITY", payload: { clickedButton } });
  };

  return (
    <div className="SelectCity">
      <h1 className="selectcity-tit">Select City</h1>
      <div className="citybutton-wrap">
        <button className="selectcity-city selected">Current Location</button>
        {city.map((city, index) => (
          <button
            onClick={buttonOnClick}
            className="selectcity-city"
            key={index}
          >
            {city.city}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelectCity;
