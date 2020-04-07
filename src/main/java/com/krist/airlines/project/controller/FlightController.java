package com.krist.airlines.project.controller;

import com.krist.airlines.project.model.Flight;
import com.krist.airlines.project.service.FlightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/flights")
public class FlightController {

    @Autowired
    FlightService flightService;


    /**
     * Endpoint to fetch flights flying into an airport by airportId
     * @param airportId
     * @return flights
     */

    @RequestMapping(value = "/in/{airportId}", method = RequestMethod.GET, produces = "application/json")
    public List<Flight> getAllFlightsIn(@PathVariable String airportId) {

        List<Flight> flightsIn = flightService.getAllFlightsIn(airportId);

        return flightsIn;
    }

    /**
     * Endpoint to fetch flights flying out from an airport by airportId
     * @param airportId
     * @return flights
     */
    @RequestMapping(value = "/out/{airportId}", method = RequestMethod.GET, produces = "application/json")
    public List<Flight> getAllFlightsOut(@PathVariable String airportId) {

        List<Flight> flightsOut = flightService.getAllFlightsOut(airportId);

        return flightsOut;
    }

    /**
     * Endpoint to fetch flights flying between airports by source and destination airportIds
     * @param sourceAirportId
     * @param destinationAirportId
     * @return flights
     */
    @RequestMapping(value = "/route/{sourceAirportId}/{destinationAirportId}", method = RequestMethod.GET,
            produces = "application/json")
    public List<Flight> getFlightsFromAndToAirports(@PathVariable String sourceAirportId,
                                                    @PathVariable String destinationAirportId) {

        List<Flight> flightsBetweenAirports = flightService.getAllFlightsBetweenAirportsByAirportId(sourceAirportId, destinationAirportId);

        return flightsBetweenAirports;
    }
}

