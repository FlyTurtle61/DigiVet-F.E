import { Component, OnInit } from '@angular/core';
import { idDto } from 'src/app/dto/id-dto';
import { UserDetailsUpdateModel } from 'src/app/dto/user-details-updateModel';
import { AdminUserDetailsService } from 'src/app/services/admin-user-details-service/admin-user-details.service';

@Component({
  selector: 'app-admin-user-managment',
  templateUrl: './admin-user-managment.component.html',
  styleUrls: ['./admin-user-managment.component.css']
})
export class AdminUserManagmentComponent implements OnInit {

  constructor(private userService:AdminUserDetailsService) { }
  userNameText:any

  user: UserDetailsUpdateModel[] = []
  ngOnInit(): void {

    this.userService.userGetAll().subscribe(data => {this.user = data})
  }

  deleteClick(id:any){

    let ids = new idDto(id);

    this.userService.userDelete(ids).subscribe()
    this.ngOnInit()
  }

}
