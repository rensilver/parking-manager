package com.rensilver.parkingmanager.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class VehicleDTO implements Serializable {

    private Long id;
    private String model;
    private String color;
    private String licensePlate;

    private List<ClientDTO> clients = new ArrayList<>();

    public VehicleDTO() {
    }

    public VehicleDTO(Long id, String model, String color, String licensePlate, List<ClientDTO> clients) {
        this.id = id;
        this.model = model;
        this.color = color;
        this.licensePlate = licensePlate;
        this.clients = clients;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getLicensePlate() {
        return licensePlate;
    }

    public void setLicensePlate(String licensePlate) {
        this.licensePlate = licensePlate;
    }

    public List<ClientDTO> getClients() {
        return clients;
    }

    public void setClients(List<ClientDTO> clients) {
        this.clients = clients;
    }
}
