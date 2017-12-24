import { FETCH_WEATHER } from "../constants/ActionTypes";
export const weather = (state = [], action) => {
  switch(action.type) {
    case FETCH_WEATHER:
      return [ action.payload.data, ...state ];
  default:
    return state;
  }
}