import React from "react";
import { useSelector, useDispatch } from "react-redux";

const SelectCity = () => {
  const dispatch = useDispatch();
  const city = useSelector((state) => state?.jsondata);
  const selectcity = useSelector((state) => state?.selectcity);
  const buttonOnClick = (e) => {
    const clickedButton = e.target;
    dispatch({
      type: "SELECT_CITY",
      payload: { selectcity: clickedButton.innerText },
    });
  };
  return (
    <div className="SelectCity">
      <h1 className="selectcity-tit">Select City</h1>
      <div className="citybutton-wrap">
        <button onClick={buttonOnClick} className="selectcity-city selected">
          Current Location
        </button>
        {city &&
          city?.map((city, index) => (
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
