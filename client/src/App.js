import React from "react";
import Navigation from "./components/layout/Navigation";
import "./App.css";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import { connect } from "react-redux";
import { changeLanguage } from "./actions/languageActions";
import { Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import jwt_decode from "jwt-decode";
import { setCurrentUser } from "./actions/authActions";
import store from "./store";
import ServicePage from "./components/pages/ServicePage/ServicePage";
import RentCar from "./components/pages/RentCar/RentCar";
import Book from "./components/pages/Book/Book";
import Admin from "./components/pages/Admin/Admin";
import { navProps, subNavProps } from "./navLinks";
import ProtectedRoute from "./utils/protectedRoute";
import BookFlight from "./components/pages/Book/BookFlight";
import Destinations from "./components/pages/Destinations/Destinations";
import AvailableFlights from "./components/pages/Flights/AvailableFlights";
// import { getAllFlights } from "./actions/flightsActions";

if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  const decoded = jwt_decode(token);
  if (decoded.exp < Date.now() / 1000) {
    store.dispatch(setCurrentUser({}));
  } else {
    store.dispatch(setCurrentUser(decoded));
  }
}

function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getAllFlights());
  // }, [dispatch]);
  return (
    <React.Fragment>
      <Navigation linkId="navbarNav" {...navProps} />
      <Header heading={navProps.brand.text} />
      <div className="container">
        <Navigation linkId="navbarSub" borderRadius={"7px"} {...subNavProps} />
        <Switch>
          <Route path="/" exact component={ServicePage} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/rent-a-car" component={RentCar} />
          <Route path="/book-a-hotel" component={Book} />
          <Route path="/admin" component={Admin} />
          <ProtectedRoute path="/book-flight" component={BookFlight} />
          <Route path="/destinations" exact component={Destinations} />
          <Route path="/available-flights" exact component={AvailableFlights} />
        </Switch>
      </div>
      <Footer />
    </React.Fragment>
  );
}

const mapStateToProps = ({ lang }) => ({ lang });
const mapDispatchToProps = (dispatch) => ({
  changeLanguage: (lang) => dispatch(changeLanguage(lang)),
  setCurrentUser: (decoded) => dispatch(setCurrentUser(decoded)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
