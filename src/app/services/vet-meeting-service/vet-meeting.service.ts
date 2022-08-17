import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmailDto } from 'src/app/dto/email-dto';
import { MeetingCanceledDto } from 'src/app/dto/meeting-canceled-dto';
import { VetMeetingDetailsModel } from 'src/app/dto/vet-meet-details';
import { VetDetailsUpdateModel } from 'src/app/dto/VetDetailUpdateModel';
import { VetEmailDto } from 'src/app/dto/vetEmail';

@Injectable({
  providedIn: 'root'
})
export class VetMeetingService {

  constructor(private http:HttpClient) { }
  getAllPath= "http://localhost:8080/digivet/meeting/getAllVetMeet"
  updatePath= "http://localhost:8080/digivet/meeting/updateMeet"
  canceledRecordPath = "http://localhost:8080/canceled/createRecord"
  deletePath="http://localhost:8080/digivet/meeting/deleteMeet"
  getAll(email:EmailDto):Observable<any>{
    let headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    console.log(JSON.stringify(email))
    return this.http.post<EmailDto>(`${this.getAllPath}`,JSON.stringify(email),{'headers' : headers})

  }

  getUpdate(meeting: VetMeetingDetailsModel): Observable<any>{

    let headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    console.log("Update service :"+JSON.stringify(meeting))
    return this.http.put<VetMeetingDetailsModel>(`${this.updatePath}`,JSON.stringify(meeting),{'headers' : headers})
  }

  getCanceled(canceled: MeetingCanceledDto): Observable<any>{
    let headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    return this.http.post<MeetingCanceledDto>(`${this.canceledRecordPath}`,JSON.stringify(canceled),{'headers' : headers})
  }


}
