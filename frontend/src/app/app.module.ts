import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateVehicleComponent } from './vehicle/create-vehicle/create-vehicle.component';
import { CreateClientComponent } from './client-components/create-client/create-client.component';
import { CreateStayComponent } from './stay/create-stay/create-stay.component';
import { VehicleDetailsComponent } from './vehicle/vehicle-details/vehicle-details.component';
import { ClientDetailsComponent } from './client-components/client-details/client-details.component';
import { StayDetailsComponent } from './stay/stay-details/stay-details.component';
import { VehicleListComponent } from './vehicle/vehicle-list/vehicle-list.component';
import { ClientListComponent } from './client-components/client-list/client-list.component';
import { StayListComponent } from './stay/stay-list/stay-list.component';
import { UpdateVehicleComponent } from './vehicle/update-vehicle/update-vehicle.component';
import { UpdateClientComponent } from './client-components/update-client/update-client.component';
import { UpdateStayComponent } from './stay/update-stay/update-stay.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateVehicleComponent,
    CreateClientComponent,
    CreateStayComponent,
    VehicleDetailsComponent,
    ClientDetailsComponent,
    StayDetailsComponent,
    VehicleListComponent,
    ClientListComponent,
    StayListComponent,
    UpdateVehicleComponent,
    UpdateClientComponent,
    UpdateStayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
