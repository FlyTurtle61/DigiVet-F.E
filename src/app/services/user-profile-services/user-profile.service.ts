import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDetailsUpdateModel } from 'src/app/dto/user-details-updateModel';
import { VetEmailDto } from 'src/app/dto/vetEmail';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor(private http:HttpClient) { }
  path= "http://localhost:8080/users/profile"
  updatePath = "http://localhost:8080/users/update"
  getAll(email:VetEmailDto):Observable<any>{
    let headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    console.log(JSON.stringify(email))
    return this.http.post<VetEmailDto>(`${this.path}`,JSON.stringify(email),{'headers' : headers})

  }

  getUpdateUser(profile:UserDetailsUpdateModel):Observable<any>{

    let headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')

    return this.http.put<UserDetailsUpdateModel>(`${this.updatePath}`,JSON.stringify(profile),{'headers' : headers})
  }
}
