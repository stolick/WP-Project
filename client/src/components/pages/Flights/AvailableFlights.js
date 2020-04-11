import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import isEmpty from "lodash.isempty";

function AvailableFlights(props) {
  const [availableFlightsComponents, setAvailableFlights] = useState([]);

  const {
    availableFlights: { flightsList, fromAiport, toAirport },
  } = useSelector((state) => state.flights);

  useEffect(() => {
    if (!isEmpty(flightsList)) {
      let componentsArray = flightsList.map((val) => {
        return (
          <div className="col-5 destinations-column m-2">
            <div>
              <label>Airline Name</label> <span>{val.airlineName}</span>
            </div>
          </div>
        );
      });
      setAvailableFlights(componentsArray);
    }
  }, [flightsList]);
  return (
    <div className="row justify-content-center m-4">
      <div className="col-12  justify-content-center">
        <h2>Available flights</h2>{" "}
        {!isEmpty(fromAiport) ? (
          <small className="lead">
            From: {fromAiport} - To: {toAirport}
          </small>
        ) : null}
        <div className="row m-2 justify-content-center">
          {availableFlightsComponents}
        </div>
      </div>
    </div>
  );
}

export default AvailableFlights;
