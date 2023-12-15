const initialState = {};

function Reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "JSON_LOAD":
      return { ...state, jsondata: payload.jsondata };
    case "SELECT_CITY":
      return { ...state, selectcity: payload.selectcity };
  }
}

export default Reducer;
