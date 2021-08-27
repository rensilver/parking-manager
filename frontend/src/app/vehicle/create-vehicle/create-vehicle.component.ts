import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import { Vehicle } from 'src/app/model/vehicle';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent implements OnInit {

  vehicle: Vehicle = new Vehicle();
  submitted = false;

  constructor(private vehicleService: VehicleService, private router: Router) { 
  }

  ngOnInit() {
  }

  newVehicle(): void {
    this.submitted = false;
    this.vehicle = new Vehicle();
  }

  saveVehicle() {
    this.vehicleService.createVehicle(this.vehicle)
    .subscribe(data => console.log(data),
    error => console.log(error));
    this.vehicle = new Vehicle();
    this.goToList();
  }

  onSubmit() {
    this.submitted = true;
    this.saveVehicle();
  }

  goToList() {
    this.router.navigate(['/vehicles'])
  }
}
