import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/model/vehicle';
import { VehicleService } from 'src/app/services/vehicle.service';
import { VehicleListComponent } from '../vehicle-list/vehicle-list.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/model/client';
import { Stay } from 'src/app/model/stay';
import { Observable } from 'rxjs';
import { ClientService } from 'src/app/services/client.service';
import { StayService } from 'src/app/services/stay.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {

  id: number;
  vehicleId: number; 
  vehicle: Vehicle;
  vehicles: Observable<Vehicle[]>;
  client: Client;
  clients: Observable<Client[]>;
  stays: Observable<Stay[]>;
  stay: Stay;
  submitted = false;

  constructor(private route: ActivatedRoute, private router: Router, 
    private clientService: ClientService, private stayService: StayService, 
    private vehicleService: VehicleService) { }

  ngOnInit() {
    this.vehicle = new Vehicle();
    this.id = this.route.snapshot.params['id'];

    this.vehicleService.getVehicle(this.id)
    .subscribe(data => {
      console.log(data)
      this.vehicle = data;
    }, error => console.log(error));

    this.reloadData();
  }

  list() {
    this.router.navigate(['vehicles']);
  }

  reloadData() {
    this.clients = this.clientService.getAllClientsForVehicle(this.id);
    this.stays = this.stayService.getAllStaysForVehicle(this.id);  
  }
}
