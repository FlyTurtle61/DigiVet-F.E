import { Component, OnInit } from '@angular/core';
import { AdminRecommendationResponseModel } from 'src/app/dto/AdminRecommendationResponseModel';
import { idDto } from 'src/app/dto/id-dto';
import { Status } from 'src/app/dto/status-dto';
import { AdminRecommendedService } from 'src/app/services/admin-recommended-service/admin-recommended.service';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.css']
})
export class CompleteComponent implements OnInit {

  constructor(private adminService:AdminRecommendedService) { }

  complete: AdminRecommendationResponseModel[] = []
  ngOnInit(): void {

    let status = new Status("COMPLETE")
    this.adminService.getAllRecommendedCompleteStatus(status).subscribe(data => {this.complete = data})

  }


  deleteClick(id:any){
    let ids = new idDto(id);
    this.adminService.deleteRecommendation(ids).subscribe()
    this.ngOnInit()
  }
}
