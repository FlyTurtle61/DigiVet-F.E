import { Component, OnInit } from '@angular/core';
import { MeetingCanceledDto } from 'src/app/dto/meeting-canceled-dto';
import { GetAllService } from 'src/app/services/get-all-vet-service/get-all.service';
import { MeetingCanceledService } from 'src/app/services/meeting-canceled-service/meeting-canceled.service';

@Component({
  selector: 'app-admin-cancelled-meeting-managment',
  templateUrl: './admin-cancelled-meeting-managment.component.html',
  styleUrls: ['./admin-cancelled-meeting-managment.component.css']
})
export class AdminCancelledMeetingManagmentComponent implements OnInit {

  constructor(private cancelledService:MeetingCanceledService) { }

  userEmailText:any
  cancelledData: MeetingCanceledDto[] = []
  ngOnInit(): void {
    this.cancelledService.getAllCanceledRecord().subscribe(data =>{this.cancelledData = data})
  }

}
