import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stay } from '../model/stay';

@Injectable({
  providedIn: 'root'
})
export class StayService {

  private baseUrl = 'http://localhost:8080/api/v1/stays';

  constructor(private http: HttpClient) { }

  getStay(id: number) : Observable<any> {
    return this.http.get<Stay>(`${this.baseUrl}/${id}`);
  }

  getStayList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getAllStaysForVehicle(vehicleId: number) : Observable<any> {
    return this.http.get<Array<Stay>>(`${this.baseUrl}/by-vehicle/${vehicleId}`);
  }

  createStay(stay: Object) : Observable<Object> {
    return this.http.post(`${this.baseUrl}`, stay);
  }

  updateStay(id: number, value: any) : Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteStay(id: number) : Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }
}
