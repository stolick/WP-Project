import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import isEmpty from "lodash.isempty";
import "./Destinations.css";

function Destinations(props) {
  const { allFlights } = useSelector((state) => state.flights);
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    if (!isEmpty(allFlights)) {
      let componentsArray = allFlights.map((val) => {
        return (
          <div className="col-5 destinations-column m-2">
            <div>
              <label>Country</label> <span>{val.country}</span>
            </div>
            <div>
              <label>Airport</label> <span>{val.airportName}</span>
            </div>
          </div>
        );
      });
      setDestinations(componentsArray);
    }
  }, [allFlights]);

  return (
    <div className="row justify-content-center m-4">
      <div className="col-12  justify-content-center">
        <h2>Destinations</h2>
        <div className="row m-2 justify-content-center">{destinations}</div>
      </div>
    </div>
  );
}

export default Destinations;
