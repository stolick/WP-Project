package com.krist.airlines.project.controller;


import com.krist.airlines.project.model.Airport;
import com.krist.airlines.project.service.AirportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/airports")
public class AirportController {

    @Autowired
    AirportService airportService;


    @RequestMapping(value = "/", method = RequestMethod.GET, produces = "application/json")
    public List<Airport> getAllAirports() {
        List<Airport> airports = airportService.findAllAirports();
        return airports;
    }
}

