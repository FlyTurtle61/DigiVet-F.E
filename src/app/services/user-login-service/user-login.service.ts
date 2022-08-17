import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { userLoginDto } from 'src/app/dto/user-login-dto';
import { UserDetailsRequestModel } from 'src/app/dto/user-details-request';
@Injectable({
  providedIn: 'root'
})

export class UserLoginService {

  constructor(private http:HttpClient) { }
  loginPath = "http://localhost:8080/users/login"
  createPath="http://localhost:8080/users/createUsers"
  body: userLoginDto[] = []

  getLogin(body:userLoginDto):Observable<any>
  {
    let headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')

    console.log(JSON.stringify(body))
    return this.http.post<any>(`${this.loginPath}`,JSON.stringify(body),{'headers' : headers});
  }

  getCreate(body:UserDetailsRequestModel):Observable<any>{
    let headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    return this.http.post<any>(`${this.createPath}`,JSON.stringify(body),{'headers' : headers})
  }

  alertMessage(){
    alert("şifre veya email adresiniz yanlıştır.")
  }



}
