import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { idDto } from 'src/app/dto/id-dto';
import { UserEmailDto } from 'src/app/dto/user-email-dto';
import { VetMeetingDetailsModel } from 'src/app/dto/vet-meet-details';
import { UserMeetingService } from 'src/app/services/user-meeting-service/user-meeting.service';
interface AppState{
  message: string;
}
@Component({
  selector: 'app-user-meeting',
  templateUrl: './user-meeting.component.html',
  styleUrls: ['./user-meeting.component.css']
})
export class UserMeetingComponent implements OnInit {
  message$ :Observable<String>;

  constructor(private meetingService:UserMeetingService,private store: Store<AppState>)

   { this.message$ = this.store.select('message')}

  vetNameText: string;
  emailState: String
  meetDetails: VetMeetingDetailsModel[] = []
  ngOnInit(): void {
    this.message$.subscribe(data => {this.emailState = data})
    var emailDto = new UserEmailDto(this.emailState.toString())
    console.log(this.emailState)
    this.meetingService.getAll(emailDto).subscribe(data =>{this.meetDetails = data;console.log(JSON.stringify(data))})
  }


  deleteClick(id:any){


  alert("Randevunuz Başarılı Bir Şekilde İptal Edilmiştir")
  var ids = new idDto(id)
  this.meetingService.deleteMeeting(ids).subscribe();
  }

}
