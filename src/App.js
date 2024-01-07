import "./App.css";
import LeftSide from "./components/LeftSide";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import { ClipLoader } from "react-spinners";
import RightSide from "./components/RightSide";

const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const [loading, setLoading] = useState(true);
  const selectcity = useSelector((state) => state?.selectcity);
  const currentweather = useSelector(
    (state) => state?.weatherApiData?.weather[0].main
  );
  const dispatch = useDispatch();
  const container = useRef();

  const city = async () => {
    const response = await fetch(
      "https://my-json-server.typicode.com/ch9901/weatherAPI/city"
    );
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
    dispatch({ type: "WEATHER_API_DATA", payload: { weatherApiData: data } });
    setLoading(false);
  };
  const getWeatherByCity = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${selectcity}&appid=${API_KEY}&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    dispatch({ type: "WEATHER_API_DATA", payload: { weatherApiData: data } });
    setLoading(false);
  };

  useEffect(() => {
    city();
    getCurrentLocation();
  }, []);

  useEffect(() => {
    if (
      selectcity === "Current Location" ||
      selectcity === "" ||
      selectcity === undefined
    ) {
      getCurrentLocation();
    } else {
      getWeatherByCity();
    }
  }, [selectcity]);

  const bgclass = ["container", currentweather, `container_${selectcity}`];
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
        <div ref={container} className={bgclass.join(" ")}>
          <LeftSide />
          <RightSide />
        </div>
      )}
    </div>
  );
}

export default App;
