import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/model/vehicle';
import { VehicleService } from 'src/app/services/vehicle.service';
import { VehicleListComponent } from '../vehicle-list/vehicle-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {

  id: number;
  vehicle: Vehicle;
  submitted = false;

  constructor(private route: ActivatedRoute, private router: Router, private vehicleService: VehicleService) { }

  ngOnInit() {
    this.vehicle = new Vehicle();
    this.id = this.route.snapshot.params['id'];

    this.vehicleService.getVehicle(this.id)
    .subscribe(data => {
      console.log(data)
      this.vehicle = data;
    }, error => console.log(error));
  }

  list() {
    this.router.navigate(['vehicles']);
  }

}
