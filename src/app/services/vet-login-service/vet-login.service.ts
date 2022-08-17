import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VetDetailsRequest } from 'src/app/dto/vet-details-request';
import { VetLoginDto } from 'src/app/dto/vet-login-dto';

@Injectable({
  providedIn: 'root'
})
export class VetLoginService {

  constructor(private http:HttpClient) { }
  loginPath = "http://localhost:8080/vet/login"
  createPath="http://localhost:8080/vet/create"
  getLogin(body:VetLoginDto):Observable<any>{
    let headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    return this.http.post<any>(`${this.loginPath}`,JSON.stringify(body),{'headers' : headers})
  }

  getCreate(body:VetDetailsRequest):Observable<any>{
    let headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    return this.http.post<any>(`${this.createPath}`,JSON.stringify(body),{'headers' : headers})
  }

}
