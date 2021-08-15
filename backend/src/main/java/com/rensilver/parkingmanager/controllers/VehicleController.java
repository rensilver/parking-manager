package com.rensilver.parkingmanager.controllers;

import com.rensilver.parkingmanager.dto.VehicleDTO;
import com.rensilver.parkingmanager.entities.Vehicle;
import com.rensilver.parkingmanager.services.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/vehicles")
public class VehicleController {

    @Autowired
    private VehicleService vehicleService;

    @GetMapping
    public ResponseEntity<List<VehicleDTO>> findAll() {
        List<VehicleDTO> vehicleList = vehicleService.findAll();
        return ResponseEntity.ok().body(vehicleList);
    }
}
