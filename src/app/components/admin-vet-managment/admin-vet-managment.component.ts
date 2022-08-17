import { Component, OnInit } from '@angular/core';
import { idDto } from 'src/app/dto/id-dto';
import { VetDetailsUpdateModel } from 'src/app/dto/VetDetailUpdateModel';
import { AdminUserDetailsService } from 'src/app/services/admin-user-details-service/admin-user-details.service';

@Component({
  selector: 'app-admin-vet-managment',
  templateUrl: './admin-vet-managment.component.html',
  styleUrls: ['./admin-vet-managment.component.css']
})
export class AdminVetManagmentComponent implements OnInit {

  constructor(private vetDetailsService:AdminUserDetailsService) { }

  vetNameText: any
  vet: VetDetailsUpdateModel[] = []
  ngOnInit(): void {
    this.vetDetailsService.vetGetAll().subscribe(data =>{this.vet = data})
  }

  deleteClick(id: any){
    console.log(id)
    let ids = new idDto(id);
    this.vetDetailsService.vetDelete(ids).subscribe()
    this.ngOnInit()
  }

}
