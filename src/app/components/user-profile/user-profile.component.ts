import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserDetailsUpdateModel } from 'src/app/dto/user-details-updateModel';
import { VetEmailDto } from 'src/app/dto/vetEmail';
import { UserProfileService } from 'src/app/services/user-profile-services/user-profile.service';
interface AppState{
  message: string;
}
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  message$ :Observable<String>;
  profile: UserDetailsUpdateModel
  emailState: String
  constructor(private profileService:UserProfileService,private store: Store<AppState>)
   { this.message$ = this.store.select('message')}


  ngOnInit(): void {

    this.message$.subscribe(data => {this.emailState = data})
    var emailDto = new VetEmailDto(this.emailState.toString())
    console.log(this.emailState)

    this.profileService.getAll(emailDto).subscribe(data =>{this.profile = data;console.log(JSON.stringify(data))})

  }
  clickButton(firstName: string,lastName:string,password:string,city:string,country:string,email:string,address: string){

    var id = this.profile.id
    var userDetailUpdateModel = new UserDetailsUpdateModel(id,firstName,lastName,email,password,city,country,address);

    this.profileService.getUpdateUser(userDetailUpdateModel).subscribe(data =>{this.profile = data;console.log(JSON.stringify(data))});
    this.ngOnInit()
  }

}
