import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EmailDto } from 'src/app/dto/email-dto';
import { MeetingCanceledDto } from 'src/app/dto/meeting-canceled-dto';
import { VetMeetingDetailsModel } from 'src/app/dto/vet-meet-details';
import { VetMeetingService } from 'src/app/services/vet-meeting-service/vet-meeting.service';
interface AppState{
  message: string;
}

@Component({
  selector: 'app-vet-meeting',
  templateUrl: './vet-meeting.component.html',
  styleUrls: ['./vet-meeting.component.css']
})

export class VetMeetingComponent implements OnInit {
  time: any;
  message$ :Observable<String>;


  userNameText: string;
  constructor(private meetingService:VetMeetingService,private store: Store<AppState>)
  {this.message$ = this.store.select('message') }
  emailState: String
  meetDetails: VetMeetingDetailsModel[] = []
  ngOnInit(): void {
    this.message$.subscribe(data => {this.emailState = data})
    var emailDto = new EmailDto(this.emailState.toString())
    console.log(this.emailState)
    this.meetingService.getAll(emailDto).subscribe(data =>{this.meetDetails = data;console.log(JSON.stringify(data))})

  }


  updateClick(id:any,userFirstName:string,userLastName:string,vetFirstName:string,vetLastName:string,meetingType:string,date:string,vetEmail:string,userEmail:string){
    var call = date +" "+ this.time + ""
    var meetUpdate = new VetMeetingDetailsModel(id,userFirstName,userLastName,vetFirstName,vetLastName,meetingType,call,vetEmail,userEmail)
    alert(call+" tarih başarılı bir şekilde güncellenmiştir.")
    this.meetingService.getUpdate(meetUpdate).subscribe();
    this.ngOnInit()
  }

  canceledClick(id:any,vetEmail:string,userEmail:string,description:string){


    var canceled = new MeetingCanceledDto(id,vetEmail,userEmail,description);
    this.meetingService.getCanceled(canceled).subscribe();
    alert("Randevu İptal Edilmiştir")

  }


}
