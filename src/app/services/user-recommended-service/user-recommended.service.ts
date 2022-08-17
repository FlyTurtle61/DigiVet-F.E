import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RecommendedDto } from 'src/app/dto/recommended';
import { reporterMail } from 'src/app/dto/reporter-email';

@Injectable({
  providedIn: 'root'
})
export class UserRecommendedService {

  constructor(private http:HttpClient) { }
  path= "http://localhost:8080/recommended/createRecommendation"

  getCreate(data: RecommendedDto):Observable<RecommendedDto>{
    let headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    return this.http.post<RecommendedDto>(`${this.path}`,JSON.stringify(data),{'headers' : headers})

  }
}
