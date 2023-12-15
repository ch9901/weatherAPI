const initialState = {};

function Reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "JSON_LOAD":
      return { ...state, jsondata: payload.jsondata };
  }
}

export default Reducer;
