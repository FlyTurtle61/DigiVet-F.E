import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MeetingCanceledDto } from 'src/app/dto/meeting-canceled-dto';
import { UserEmailDto } from 'src/app/dto/user-email-dto';
import { VetEmailDto } from 'src/app/dto/vetEmail';

@Injectable({
  providedIn: 'root'
})
export class MeetingCanceledService {

  constructor(private http:HttpClient) { }

  path= "http://localhost:8080/canceled/getAllRecord"
  adminPath="http://localhost:8080/canceled/getAll"

  getAll(email:UserEmailDto):Observable<MeetingCanceledDto[]>{
    let headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    console.log(JSON.stringify(email))
    return this.http.post<MeetingCanceledDto[]>(`${this.path}`,JSON.stringify(email),{'headers' : headers})

  }


  getAllCanceledRecord():Observable<MeetingCanceledDto[]>{
    let headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    return this.http.get<MeetingCanceledDto[]>(`${this.adminPath}`,{'headers' : headers})
  }
}
