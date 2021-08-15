package com.rensilver.parkingmanager.services;

import com.rensilver.parkingmanager.dto.VehicleDTO;
import com.rensilver.parkingmanager.entities.Vehicle;
import com.rensilver.parkingmanager.repositories.ClientRepository;
import com.rensilver.parkingmanager.repositories.StayRepository;
import com.rensilver.parkingmanager.repositories.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class VehicleService {

    @Autowired
    private VehicleRepository vehicleRepository;

    @Autowired
    private ClientRepository clientRepository;

    @Autowired
    private StayRepository stayRepository;

    @Transactional(readOnly = true)
    public List<VehicleDTO> findAll() {
        List<Vehicle> vehicleList = vehicleRepository.findAll();
        return vehicleList
                .stream()
                .map(x -> new VehicleDTO(x, x.getClients(), x.getStays()))
                .collect(Collectors.toList());
    }
}
