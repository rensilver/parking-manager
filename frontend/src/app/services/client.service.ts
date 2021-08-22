import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private baseUrl = 'http://localhost:8080/api/v1/clients';

  constructor(private http: HttpClient) { }

  getClient(id: number) : Observable <any> {
    return this.http.get(`${this.baseUrl}`)
  }

  getClientList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  createClient(client: Object) : Observable<Object> {
    return this.http.post(`${this.baseUrl}`, client);
  }

  updateClient(id: number, value: any) : Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value)
  }

  deleteClient(id: number) : Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }
}
