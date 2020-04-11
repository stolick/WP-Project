import lang from "./languageReducer";
import errors from "./errorsReducer";
import { combineReducers } from "redux";
import auth from "./authReducers";
import tabs from "./tabsReducer";
import flights from "./flightsReducer";

export default combineReducers({ lang, auth, errors, tabs, flights });
