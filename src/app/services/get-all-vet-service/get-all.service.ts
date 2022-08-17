import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comments } from 'src/app/dto/comment';
import { createCommentDto } from 'src/app/dto/createCommentDto';
import { EmailDto } from 'src/app/dto/email-dto';
import { idDto } from 'src/app/dto/id-dto';
import { MeetingModel } from 'src/app/dto/meet-model';
import { UserDetailsUpdateModel } from 'src/app/dto/user-details-updateModel';
import { VetDetailsUpdateModel } from 'src/app/dto/VetDetailUpdateModel';
import { VetEmailDto } from 'src/app/dto/vetEmail';

@Injectable({
  providedIn: 'root'
})
export class GetAllService {

  constructor(private http:HttpClient) { }
  profilePath= "http://localhost:8080/users/profile"
  path = "http://localhost:8080/vet/getAll"
  createPath = "http://localhost:8080/digivet/meeting/createMeeting"
  findCommentPath ="http://localhost:8080/digivet/comments/findComment"
  createCommentPath ="http://localhost:8080/digivet/comments/create"
  deleteCommentPath ="http://localhost:8080/digivet/comments/deleteComment"
  getAllCommentPath ="http://localhost:8080/digivet/comments/findAll"

  getAll():Observable<VetDetailsUpdateModel[]>{

    console.log(this.http.get<VetDetailsUpdateModel[]>(`${this.path}`));
    return this.http.get<VetDetailsUpdateModel[]>(`${this.path}`);

  }

   getProfile(email: VetEmailDto):Observable<UserDetailsUpdateModel>{
     let headers= new HttpHeaders()
     .set('content-type', 'application/json')
     .set('Access-Control-Allow-Origin', '*')
     console.log(JSON.stringify(email))
     return this.http.post<UserDetailsUpdateModel>(`${this.profilePath}`,JSON.stringify(email),{'headers' : headers})

   }


   getCreateMeeting(meet: MeetingModel): Observable<MeetingModel>{
    let headers= new HttpHeaders()
     .set('content-type', 'application/json')
     .set('Access-Control-Allow-Origin', '*')
    return this.http.post<MeetingModel>(`${this.createPath}`,JSON.stringify(meet),{'headers' : headers})
   }

   getAllVetComment(email:EmailDto): Observable<Comments[]>{

      let headers= new HttpHeaders()
       .set('content-type', 'application/json')
       .set('Access-Control-Allow-Origin', '*')
      return this.http.post<Comments[]>(`${this.findCommentPath}`,JSON.stringify(email),{'headers' : headers})

   }

   createComment(comment: createCommentDto): Observable<createCommentDto>{
    let headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
     return this.http.post<createCommentDto>(`${this.createCommentPath}`,JSON.stringify(comment),{'headers' : headers})
   }

   deleteComment(id: idDto):Observable<any>{
    let headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')

    return this.http.post<any>(`${this.deleteCommentPath}`,JSON.stringify(id),{'headers' : headers})
   }

   getAllComment():Observable<Comments[]>{
    let headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    return this.http.get<Comments[]>(`${this.getAllCommentPath}`,{'headers' : headers})
   }
}
