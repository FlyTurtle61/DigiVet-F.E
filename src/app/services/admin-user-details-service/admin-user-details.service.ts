import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { idDto } from 'src/app/dto/id-dto';
import { VetDetailsUpdateModel } from 'src/app/dto/VetDetailUpdateModel';
import{UserDetailsUpdateModel} from '../../dto/user-details-updateModel'
@Injectable({
  providedIn: 'root'
})
export class AdminUserDetailsService {

  constructor(private http:HttpClient){ }

  userPath = "http://localhost:8080/users/getAll"
  userDeletePath = "http://localhost:8080/users/delete"
  vetPath = "http://localhost:8080/vet/getAll"
  deleteVetPath="http://localhost:8080/vet/delete"
  userGetAll():Observable<UserDetailsUpdateModel[]>{

    let headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')

    return this.http.get<UserDetailsUpdateModel[]>(`${this.userPath}`,{'headers' : headers})

  }


  userDelete(id:idDto){
    let headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')

    return this.http.post<UserDetailsUpdateModel>(`${this.userDeletePath}`,JSON.stringify(id),{'headers' : headers})
  }

  vetGetAll():Observable<VetDetailsUpdateModel[]>{
    let headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')

    return this.http.get<VetDetailsUpdateModel[]>(`${this.vetPath}`,{'headers' : headers})
  }

  vetDelete(id: idDto):Observable<VetDetailsUpdateModel>{
    let headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    return this.http.post<VetDetailsUpdateModel>(`${this.deleteVetPath}`,JSON.stringify(id),{'headers' : headers})
  }

}
