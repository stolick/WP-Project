package com.krist.airlines.project.service;

import com.krist.airlines.project.model.Airport;
import com.krist.airlines.project.repository.AirportJdbcRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class AirportService {

    //Database query class connected via JDBC
    @Autowired
    AirportJdbcRepository airportJdbcRepository;

    // List of flights to be returned to the caller
    List<Airport> airports;


    public List<Airport> findAllAirports() {
        airports = airportJdbcRepository.findAllAirports();
        return airports;
    }


}