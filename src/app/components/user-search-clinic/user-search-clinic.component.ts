import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Comments } from 'src/app/dto/comment';
import { createCommentDto } from 'src/app/dto/createCommentDto';
import { EmailDto } from 'src/app/dto/email-dto';
import { MeetingModel } from 'src/app/dto/meet-model';
import { UserDetailsUpdateModel } from 'src/app/dto/user-details-updateModel';
import { VetDetailsUpdateModel } from 'src/app/dto/VetDetailUpdateModel';
import { VetEmailDto } from 'src/app/dto/vetEmail';
import { GetAllService } from 'src/app/services/get-all-vet-service/get-all.service';

interface AppState{
  message: string;
}
@Component({
  selector: 'app-user-search-clinic',
  templateUrl: './user-search-clinic.component.html',
  styleUrls: ['./user-search-clinic.component.css']
})
export class UserSearchClinicComponent implements OnInit {
  message$ :Observable<String>;
  time: any;
  emailState: String
  constructor(private meetingService:GetAllService,private store: Store<AppState>)
  { this.message$ = this.store.select('message')}

  profiles: UserDetailsUpdateModel
  meets: VetDetailsUpdateModel[] = []
  adressText: string
  vetNameText: string
  ngOnInit(): void {

     this.message$.subscribe(data => {this.emailState = data})
     var emailDto = new VetEmailDto(this.emailState.toString())

    this.meetingService.getProfile(emailDto).subscribe(data => {this.profiles = data})
    this.meetingService.getAll().subscribe(data =>{this.meets = data;console.log(JSON.stringify(data))})
  }


  createMeet(firstName: string,lastName: string,meetingType: string,date:string,vetEmail: string)
  {
    let call = date + " " +this.time
    let sendMeets = new MeetingModel(this.profiles.firstName,this.profiles.lastName,firstName,lastName,meetingType,call,vetEmail,this.profiles.email);

    alert("Randevu Kaydınız "+date+" tarihinde saat "+this.time+" oluşturulmuştur.")
    return this.meetingService.getCreateMeeting(sendMeets).subscribe()

  }

  comments: Comments[] = []
  getAllComment(vetEmail:string){
    let mail = new EmailDto(vetEmail)
    return this.meetingService.getAllVetComment(mail).subscribe(data => {this.comments = data})


  }

  createComment(vetEmail:string,comment:string){

    let createComment = new createCommentDto(this.profiles.email,vetEmail,comment,this.profiles.email)

    alert("Yorum Yapılmıştır")
    console.log(JSON.stringify(createComment))
    return this.meetingService.createComment(createComment).subscribe();
  }



}
