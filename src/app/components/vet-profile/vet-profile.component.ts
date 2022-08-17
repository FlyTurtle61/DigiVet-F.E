import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EmailDto } from 'src/app/dto/email-dto';
import { UserDetailsRequestModel } from 'src/app/dto/user-details-request';
import { VetDetailsUpdateModel } from 'src/app/dto/VetDetailUpdateModel';
import { VetDetailsRequest } from 'src/app/dto/vet-details-request';
import { VetEmailDto } from 'src/app/dto/vetEmail';
import { VetComentGetAllService } from 'src/app/services/vet-comment-get-all-services/vet-coment-get-all.service';
import { VetProfileService } from 'src/app/services/vet-profile-services/vet-profile.service';
interface AppState{
  message: string;
}
@Component({
  selector: 'app-vet-profile',
  templateUrl: './vet-profile.component.html',
  styleUrls: ['./vet-profile.component.css']
})
export class VetProfileComponent implements OnInit {

  message$ :Observable<String>;
  constructor(private profileService:VetProfileService,private store: Store<AppState>)
   { this.message$ = this.store.select('message')}


   profile: VetDetailsUpdateModel
   emailState: String
  ngOnInit(): void {

    this.message$.subscribe(data => {this.emailState = data})
    var emailDto = new VetEmailDto(this.emailState.toString())
    console.log(this.emailState)

    this.profileService.getAll(emailDto).subscribe(data =>{this.profile = data;console.log(JSON.stringify(data))})

  }

  clickButton(firstName:string,lastName:string,password:string,city:string,country:string,email:string,adress:string,branch:string,hospital:string){

    var id = this.profile.id
    var userDetailUpdateModel = new VetDetailsUpdateModel(id,firstName,lastName,email,password,city,country,branch,hospital,adress);

    this.profileService.getUpdateVet(userDetailUpdateModel).subscribe(data =>{this.profile = data;console.log(JSON.stringify(data))});
    this.ngOnInit()
  }

}
