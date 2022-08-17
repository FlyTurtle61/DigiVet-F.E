import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { adminCreateModel } from 'src/app/dto/admin-create-model';

@Injectable({
  providedIn: 'root'
})
export class CreateAdminService {

  constructor(private http:HttpClient) { }
  path = "http://localhost:8080/admin/create"

  getAll(admin:adminCreateModel):Observable<adminCreateModel>{
    let headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    return this.http.post<adminCreateModel>(`${this.path}`,JSON.stringify(admin),{'headers' : headers})

  }
}
