import { Component, OnInit } from '@angular/core';
import { AdminRecommendationRequestModel } from 'src/app/dto/AdminRecommendationRequestModel';
import { AdminRecommendationResponseModel } from 'src/app/dto/AdminRecommendationResponseModel';
import { Status } from 'src/app/dto/status-dto';
import { AdminRecommendedService } from 'src/app/services/admin-recommended-service/admin-recommended.service';

@Component({
  selector: 'app-in-progress',
  templateUrl: './in-progress.component.html',
  styleUrls: ['./in-progress.component.css']
})
export class InProgressComponent implements OnInit {

  constructor(private adminService:AdminRecommendedService) { }

  todo: AdminRecommendationRequestModel[] = []
  ngOnInit(): void {
    let status = new Status("INPROGRESS")
     this.adminService.getAllRecommendedStatus(status).subscribe(data => {this.todo = data})
  }

  clickInProgress(id:any,reportedMail:string,description:string,reponse:string){

    let recommended = new AdminRecommendationResponseModel(id,reportedMail,description,"COMPLETE",reponse)
    this.adminService.updateRecommendationComplete(recommended).subscribe();
    this.ngOnInit()

  }

}
