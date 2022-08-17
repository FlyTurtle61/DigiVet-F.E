import { Component, OnInit } from '@angular/core';
import { AdminRecommendationRequestModel } from 'src/app/dto/AdminRecommendationRequestModel';
import { Status } from 'src/app/dto/status-dto';
import { AdminMeetingDataService } from 'src/app/services/admin-meeting-service/admin-meeting-data.service';
import { AdminRecommendedService } from 'src/app/services/admin-recommended-service/admin-recommended.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private adminService:AdminRecommendedService) { }



  todo: AdminRecommendationRequestModel[] = []
  ngOnInit(): void {
     let status = new Status("TODO")
     this.adminService.getAllRecommendedStatus(status).subscribe(data => {this.todo = data})
  }


  clickInProgress(id:any,reportedMail:string,description:string){

    let recommended = new AdminRecommendationRequestModel(id,reportedMail,description,"INPROGRESS")
    this.adminService.updateRecommendation(recommended).subscribe();
    this.ngOnInit()

  }



}
