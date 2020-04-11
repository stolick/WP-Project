import {
  SET_ALL_FLIGHTS,
  SET_FLIGHTS_FROM_AIRPORT,
  SET_AVAILABLE_FLIGHTS_FROM_TO,
} from "./../actions/types";

const initialState = {
  allFlights: [],
  flightsFromAirport: [],
  availableFlights: { flightsList: [] },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_FLIGHTS:
      return {
        ...state,
        allFlights: action.payload,
      };
    case SET_FLIGHTS_FROM_AIRPORT:
      return {
        ...state,
        flightsFromAirport: action.payload,
      };
    case SET_AVAILABLE_FLIGHTS_FROM_TO:
      const { flightsList, fromAiport, toAirport } = action.payload;
      return {
        ...state,
        availableFlights: { flightsList, fromAiport, toAirport },
      };
    default:
      return state;
  }
};
