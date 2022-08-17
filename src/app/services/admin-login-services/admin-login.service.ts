import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminLoginDto } from 'src/app/dto/admin-login-dto';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {
  constructor(private http:HttpClient) { }
  loginPath = "http://localhost:8080/admin/findAdmin"

  getLogin(body:AdminLoginDto):Observable<any>
  {
    let headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')

    console.log(JSON.stringify(body))
    return this.http.post<any>(`${this.loginPath}`,JSON.stringify(body),{'headers' : headers});
  }
}
