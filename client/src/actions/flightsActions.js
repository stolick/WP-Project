import axios from "axios";
import {
  SET_ALL_FLIGHTS,
  SET_FLIGHTS_FROM_AIRPORT,
  SET_AVAILABLE_FLIGHTS_FROM_TO,
} from "./types";

export const getAllFlights = () => async (dispatch) => {
  try {
    const result = await axios.get("/airports/");
    result.data && dispatch({ type: SET_ALL_FLIGHTS, payload: result.data });
  } catch (err) {
    console.log(err);
  }
};

export const getFlightsFromAirport = (id) => async (dispatch) => {
  try {
    const result = await axios.get("/flights/in/" + id);
    dispatch({ type: SET_FLIGHTS_FROM_AIRPORT, payload: result.data });
  } catch (err) {
    console.log(err);
  }
};

export const findRoutes = (data) => async (dispatch) => {
  try {
    const result = await axios.get(
      `/flights/route/${data.from.airportId}/${data.to.airportId}`
    );
    dispatch({
      type: SET_AVAILABLE_FLIGHTS_FROM_TO,
      payload: {
        flightsList: result.data,
        fromAiport: data.from.airportName,
        toAirport: data.to.airportName,
      },
    });
  } catch (err) {
    console.log(err);
  }
};
