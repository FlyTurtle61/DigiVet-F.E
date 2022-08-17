import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {VetMeetingDetailsModel} from "../../dto/vet-meet-details"
@Injectable({
  providedIn: 'root'
})
export class AdminMeetingDataService {

  constructor(private http:HttpClient) { }

  path="http://localhost:8080/digivet/meeting/findAll"

  getAll():Observable<any>{
    let headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')

    return this.http.get<VetMeetingDetailsModel>(`${this.path}`,{'headers' : headers})

  }
}
