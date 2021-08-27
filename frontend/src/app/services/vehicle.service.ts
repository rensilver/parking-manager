import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehicle } from '../model/vehicle';
import { Client } from '../model/client';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {



private baseUrl = 'http://localhost:8080/api/v1/vehicles';

  constructor(private http: HttpClient) { }

  getVehicle(id: number) : Observable <any> {
    return this.http.get<Vehicle>(`${this.baseUrl}/${id}`)
  }

  getVehicleList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  createVehicle(vehicle: Object) : Observable<Object> {
    return this.http.post(`${this.baseUrl}`, vehicle);
  }

  updateVehicle(id: number, value: any) : Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value)
  }

  deleteVehicle(id: number) : Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }
}
