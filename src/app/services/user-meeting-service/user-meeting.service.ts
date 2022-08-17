import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserEmailDto } from 'src/app/dto/user-email-dto';

@Injectable({
  providedIn: 'root'
})
export class UserMeetingService {

  constructor(private http:HttpClient) { }
  getAllPath="http://localhost:8080/digivet/meeting/getAllUserMeet"
  deletePath ="http://localhost:8080/digivet/meeting/deleteMeet"
  getAll(email:UserEmailDto):Observable<any>{
    let headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    console.log(JSON.stringify(email))
    return this.http.post<UserEmailDto>(`${this.getAllPath}`,JSON.stringify(email),{'headers' : headers})

  }
  deleteMeeting(id:any):Observable<any>{
    let headers = new HttpHeaders()
    .set('content-type','application/json')
    .set('Access-Control-Allow-Origin', '*')

    return this.http.post<any>(`${this.deletePath}`,JSON.stringify(id),{'headers' : headers})

  }
}
