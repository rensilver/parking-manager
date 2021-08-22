import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StayService {

  private baseUrl = 'http://localhost:8080/api/v1/stays';

  constructor(private http: HttpClient) { }

  getStay(id: number) : Observable <any> {
    return this.http.get(`${this.baseUrl}`)
  }

  getStayList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  createStay(stay: Object) : Observable<Object> {
    return this.http.post(`${this.baseUrl}`, stay);
  }

  updateStay(id: number, value: any) : Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value)
  }

  deleteStay(id: number) : Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }
}
