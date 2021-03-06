import { Component, OnInit } from '@angular/core';
import { VehicleDetailsComponent } from '../vehicle-details/vehicle-details.component';
import { Observable, throwError } from 'rxjs';
import { VehicleService } from 'src/app/services/vehicle.service';
import { Vehicle } from 'src/app/model/vehicle';
import { Router } from '@angular/router';
import { Client } from 'src/app/model/client';

import { Stay } from 'src/app/model/stay';


@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  vehicle: Vehicle;
  vehicles: Observable<Vehicle[]>;

  constructor(private vehicleService: VehicleService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.vehicles = this.vehicleService.getVehicleList();
  }

  deleteVehicle (id: number){
    this.vehicleService.deleteVehicle(id)
    .subscribe(
      data => {
        console.log(data)
        this.reloadData();
      },
      error => console.log(error)
    );
  }
  vehicleDetails(id: number){
    this.router.navigate(['vehicle-details', id]);
  }

  updateVehicle(id: number){
    this.router.navigate(['update-vehicle', id])
  }
}
