package com.rensilver.parkingmanager.dto;

import com.rensilver.parkingmanager.entities.Client;

import java.io.Serializable;

public class ClientDTO implements Serializable {

    private Long id;
    private String firstName;
    private String lastName;
    private String cpf;
    private String address;

    public ClientDTO() {
    }

    public ClientDTO(Long id, String firstName, String lastName, String cpf, String address) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.cpf = cpf;
        this.address = address;
    }

    public ClientDTO(Client entity) {
        id = entity.getId();
        firstName = entity.getFirstName();
        lastName = entity.getLastName();
        cpf = entity.getCpf();
        address = entity.getAddress();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
