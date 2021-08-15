package com.rensilver.parkingmanager.dto;

import com.rensilver.parkingmanager.entities.Stay;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalTime;

public class StayDTO implements Serializable {

    private Long id;
    private LocalDate entryDate;
    private LocalDate departureDate;
    private LocalTime entryTime;
    private LocalTime exitTime;
    private Double hourlyValor;

    public StayDTO() {
    }

    public StayDTO(Long id, LocalDate entryDate, LocalDate departureDate, LocalTime entryTime, LocalTime exitTime, Double hourlyValor) {
        this.id = id;
        this.entryDate = entryDate;
        this.departureDate = departureDate;
        this.entryTime = entryTime;
        this.exitTime = exitTime;
        this.hourlyValor = hourlyValor;
    }

    public StayDTO(Stay entity) {
        id = entity.getId();
        entryDate = entity.getEntryDate();
        departureDate = entity.getDepartureDate();
        entryTime = entity.getEntryTime();
        exitTime = entity.getExitTime();
        hourlyValor = entity.getHourlyValor();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getEntryDate() {
        return entryDate;
    }

    public void setEntryDate(LocalDate entryDate) {
        this.entryDate = entryDate;
    }

    public LocalDate getDepartureDate() {
        return departureDate;
    }

    public void setDepartureDate(LocalDate departureDate) {
        this.departureDate = departureDate;
    }

    public LocalTime getEntryTime() {
        return entryTime;
    }

    public void setEntryTime(LocalTime entryTime) {
        this.entryTime = entryTime;
    }

    public LocalTime getExitTime() {
        return exitTime;
    }

    public void setExitTime(LocalTime exitTime) {
        this.exitTime = exitTime;
    }

    public Double getHourlyValor() {
        return hourlyValor;
    }

    public void setHourlyValor(Double hourlyValor) {
        this.hourlyValor = hourlyValor;
    }
}
