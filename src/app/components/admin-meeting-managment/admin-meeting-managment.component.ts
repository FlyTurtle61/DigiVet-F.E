import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { VetMeetingDetailsModel } from 'src/app/dto/vet-meet-details';
import { AdminMeetingDataService } from 'src/app/services/admin-meeting-service/admin-meeting-data.service';
interface AppState{
  message: string;
}
@Component({
  selector: 'app-admin-meeting-managment',
  templateUrl: './admin-meeting-managment.component.html',
  styleUrls: ['./admin-meeting-managment.component.css']
})
export class AdminMeetingManagmentComponent implements OnInit {

  message$ :Observable<String>;

  constructor(private adminService:AdminMeetingDataService,private store: Store<AppState>)

   { this.message$ = this.store.select('message')}

   meet: VetMeetingDetailsModel[] = []
   userEmailText:any
  ngOnInit(): void {
    this.adminService.getAll().subscribe(data => {this.meet = data})
  }

}
