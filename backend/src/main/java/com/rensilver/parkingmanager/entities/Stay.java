package com.rensilver.parkingmanager.entities;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Objects;

@Entity
@Table(name = "tb_stay")
public class Stay {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="entryDate", nullable = false)
    private LocalDate entryDate;

    @Column(name="departureDate", nullable = false)
    private LocalDate departureDate;

    @Column(name="entryTime", nullable = false)
    private LocalTime entryTime;

    @Column(name="exitTime", nullable = false)
    private LocalTime exitTime;

    private Double amount;

    public Stay() {
    }

    public Stay(Long id, LocalDate entryDate, LocalDate departureDate, LocalTime entryTime, LocalTime exitTime, Double amount) {
        this.id = id;
        this.entryDate = entryDate;
        this.departureDate = departureDate;
        this.entryTime = entryTime;
        this.exitTime = exitTime;
        this.amount = amount;
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

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Stay stay = (Stay) o;
        return Objects.equals(id, stay.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
