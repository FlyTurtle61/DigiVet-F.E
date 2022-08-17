import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmailDto } from 'src/app/dto/email-dto';
import { VetDetailsUpdateModel } from 'src/app/dto/VetDetailUpdateModel';
import { VetEmailDto } from 'src/app/dto/vetEmail';

@Injectable({
  providedIn: 'root'
})
export class VetProfileService {

  constructor(private http:HttpClient) { }
  path= "http://localhost:8080/vet/profile"
  updatePath = "http://localhost:8080/vet/update"
  getAll(email:VetEmailDto):Observable<any>{
    let headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    console.log(JSON.stringify(email))
    return this.http.post<VetEmailDto>(`${this.path}`,JSON.stringify(email),{'headers' : headers})

  }
  getUpdateVet(profile:VetDetailsUpdateModel):Observable<any>{

    let headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')

    return this.http.put<VetDetailsUpdateModel>(`${this.updatePath}`,JSON.stringify(profile),{'headers' : headers})
  }
}
