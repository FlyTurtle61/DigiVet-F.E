import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MeetingCanceledDto } from 'src/app/dto/meeting-canceled-dto';
import { UserEmailDto } from 'src/app/dto/user-email-dto';
import { MeetingCanceledService } from 'src/app/services/meeting-canceled-service/meeting-canceled.service';
interface AppState{
  message: string;
}
@Component({
  selector: 'app-user-canceled-meeting',
  templateUrl: './user-canceled-meeting.component.html',
  styleUrls: ['./user-canceled-meeting.component.css']
})
export class UserCanceledMeetingComponent implements OnInit {

  message$ :Observable<String>;
  searchText: string

  constructor(private meetingService:MeetingCanceledService,private store: Store<AppState>)

   { this.message$ = this.store.select('message')}

   emailState: String

   canceledMeeting: MeetingCanceledDto[] = []
  ngOnInit(): void {
    this.message$.subscribe(data => {this.emailState = data})
    var emailDto = new UserEmailDto(this.emailState.toString())
    this.meetingService.getAll(emailDto).subscribe(data =>{this.canceledMeeting = data})
  }

}
