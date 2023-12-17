import "./App.css";
import LeftSide from "./components/LeftSide";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import RightSide from "./components/RightSide";

const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const selectcity = useSelector((state) => state.selectcity);
  const city = async () => {
    const response = await fetch("http://localhost:3004/city");
    const data = await response.json();
    dispatch({ type: "JSON_LOAD", payload: { jsondata: data } });
  };

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    dispatch({ type: "WEATHER_API_DATA", payload: { weatherApiData: data } });
    // setLoading(false);
  };

  const getWeatherByCity = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${selectcity}&appid=${API_KEY}&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    // setweather(data);
    setLoading(false);
  };

  useEffect(() => {
    city();
    getCurrentLocation();
  }, []);

  /////
  useEffect(() => {
    if (selectcity === "") {
      getCurrentLocation();
    } else {
      getWeatherByCity();
    }
  }, [selectcity]);

  const handleCityChange=(selectcity)=>{
if(selectcity==="")
  }
  return (
    <div>
      {loading ? (
        <div className="container_yetload">
          <ClipLoader
            className="spinner"
            color="#000"
            size={200}
            loading={loading}
          />
        </div>
      ) : (
        <div className="container">
          <LeftSide />
          <RightSide />
        </div>
      )}
    </div>
  );
}

export default App;
