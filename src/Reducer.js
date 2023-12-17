const initialState = { selectcity: "Current Location" };

function Reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "JSON_LOAD":
      return { ...state, jsondata: payload.jsondata };
    case "SELECT_CITY":
      return { ...state, selectcity: payload.selectcity };
    case "WEATHER_API_DATA":
      return { ...state, weatherApiData: payload.weatherApiData };
  }
}

export default Reducer;
