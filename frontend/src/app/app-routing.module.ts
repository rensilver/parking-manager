import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleDetailsComponent } from './vehicle/vehicle-details/vehicle-details.component';
import { VehicleListComponent } from './vehicle/vehicle-list/vehicle-list.component';
import { UpdateVehicleComponent } from './vehicle/update-vehicle/update-vehicle.component';
import { CreateVehicleComponent } from './vehicle/create-vehicle/create-vehicle.component';
import { ClientDetailsComponent } from './client-components/client-details/client-details.component';
import { ClientListComponent } from './client-components/client-list/client-list.component';
import { UpdateClientComponent } from './client-components/update-client/update-client.component';
import { CreateClientComponent } from './client-components/create-client/create-client.component';
import { StayDetailsComponent } from './stay/stay-details/stay-details.component';
import { StayListComponent } from './stay/stay-list/stay-list.component';
import { UpdateStayComponent } from './stay/update-stay/update-stay.component';
import { CreateStayComponent } from './stay/create-stay/create-stay.component';

const routes: Routes = [
  { path: '', redirectTo: 'vehicles', pathMatch: 'full' },
  { path: 'vehicles', component: VehicleListComponent },
  { path: 'add-vehicle', component: CreateVehicleComponent },
  { path: 'update-vehicle/:id', component: UpdateVehicleComponent },
  { path: 'vehicle-details/:id', component: VehicleDetailsComponent },
  { path: '', redirectTo: 'clients', pathMatch: 'full' },
  { path: 'clients', component: ClientListComponent },
  { path: 'add-client', component: CreateClientComponent },
  { path: 'update-client/:id', component: UpdateClientComponent },
  { path: 'client-details/:id', component: ClientDetailsComponent },
  { path: '', redirectTo: 'stays', pathMatch: 'full' },
  { path: 'stays', component: StayListComponent },
  { path: 'add-stay', component: CreateStayComponent },
  { path: 'update-stay/:id', component: UpdateStayComponent },
  { path: 'stay-details/:id', component: StayDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
