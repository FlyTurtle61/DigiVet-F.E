import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { createCommentDto } from 'src/app/dto/createCommentDto';
import { EmailDto } from 'src/app/dto/email-dto';

@Injectable({
  providedIn: 'root'
})
export class VetComentGetAllService {

  constructor(private http:HttpClient) { }
  path= "http://localhost:8080/digivet/comments/findComment"
  createCommentPath ="http://localhost:8080/digivet/comments/create"

  getAll(email:EmailDto):Observable<any>{
    let headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    console.log(email)
    return this.http.post<Comment>(`${this.path}`,JSON.stringify(email),{'headers' : headers})

  }
  createComment(comment: createCommentDto): Observable<createCommentDto>{
    let headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
     return this.http.post<createCommentDto>(`${this.createCommentPath}`,JSON.stringify(comment),{'headers' : headers})

}
}
