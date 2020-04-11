package com.krist.airlines.project.repository;

import com.krist.airlines.project.model.Airport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Repository
public class AirportJdbcRepository {

    @Autowired
    JdbcTemplate jdbcTemplate;

    Airport airport;

    String getAllAirports;



    /**
     * RowMapper implementation for fetching airports
     */
    class allAirportsRowMapper implements RowMapper<Airport> {

        public Airport mapRow(ResultSet rs, int rowNum) throws SQLException {

            airport = new Airport();
            airport.setAirportId(rs.getString("AIRPORTID"));
            airport.setAirportName(rs.getString("AIRPORTNAME"));
            airport.setCountry(rs.getString("COUNTRY"));
            return airport;
        }
    }


    /**
     * Query method for airports
     * @return List of airports
     */
    public List<Airport> findAllAirports() {

        getAllAirports = "select " +
                "AIRPORTS.NAME as AIRPORTNAME, " +
                "AIRPORTS.AIRPORTID as AIRPORTID, "+
                "AIRPORTS.COUNTRY as COUNTRY "+
                "from AIRPORTS " +
                "LIMIT 100;";

        return jdbcTemplate.query(getAllAirports, new allAirportsRowMapper());
    }


}
