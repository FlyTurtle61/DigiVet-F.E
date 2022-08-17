import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminRecommendationRequestModel } from 'src/app/dto/AdminRecommendationRequestModel';
import { AdminRecommendationResponseModel } from 'src/app/dto/AdminRecommendationResponseModel';
import { idDto } from 'src/app/dto/id-dto';
import { Status } from 'src/app/dto/status-dto';
@Injectable({
  providedIn: 'root'
})
export class AdminRecommendedService {

  constructor(private http:HttpClient) { }

  getAllRecommendedStatuspath = "http://localhost:8080/recommended/getAllRecommendedStatus"

  createRecommendationPath="http://localhost:8080/recommended/createRecommendation"

  updateRecommendationPath="http://localhost:8080/recommended/updateRecommendation"

  deleteRecommendationPath="http://localhost:8080/recommended/delete"

   getAllRecommendedStatus(status:Status):Observable<AdminRecommendationRequestModel[]>{
     let headers= new HttpHeaders()
     .set('content-type', 'application/json')
     .set('Access-Control-Allow-Origin', '*')

     return this.http.post<AdminRecommendationRequestModel[]>(`${this.getAllRecommendedStatuspath}`,JSON.stringify(status),{'headers' : headers})
   }
   getAllRecommendedCompleteStatus(status:Status):Observable<AdminRecommendationResponseModel[]>{
    let headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')

    return this.http.post<AdminRecommendationResponseModel[]>(`${this.getAllRecommendedStatuspath}`,JSON.stringify(status),{'headers' : headers})
  }
   updateRecommendation(recommended: AdminRecommendationRequestModel):Observable<AdminRecommendationRequestModel>{
    let headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')

    return this.http.post<AdminRecommendationRequestModel>(`${this.updateRecommendationPath}`,JSON.stringify(recommended),{'headers' : headers})

   }

   updateRecommendationComplete(recommended: AdminRecommendationResponseModel):Observable<AdminRecommendationResponseModel>{
    let headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')

    return this.http.post<AdminRecommendationResponseModel>(`${this.updateRecommendationPath}`,JSON.stringify(recommended),{'headers' : headers})

   }
   deleteRecommendation(id : idDto):Observable<any>{
    let headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
     return this.http.post<any>(`${this.deleteRecommendationPath}`,JSON.stringify(id),{'headers' : headers})
   }




}
