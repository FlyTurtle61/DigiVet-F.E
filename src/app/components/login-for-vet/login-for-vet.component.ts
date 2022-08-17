import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { VetDetailsRequest } from 'src/app/dto/vet-details-request';
import { VetLoginDto } from 'src/app/dto/vet-login-dto';
import { VetLoginService } from 'src/app/services/vet-login-service/vet-login.service';
interface AppState{
  message: string;
}
@Component({
  selector: 'app-login-for-vet',
  templateUrl: './login-for-vet.component.html',
  styleUrls: ['./login-for-vet.component.css'],
  providers: [VetLoginService]

})
export class LoginForVetComponent implements OnInit {

  message$ :Observable<String>;
  constructor(private vetLoginService:VetLoginService,private store: Store<AppState>,private router: Router) { }

  ngOnInit(): void {
  }

  List: String[] = []

  state:any
  vetLoginDto : VetLoginDto
  loginClick(email:string,password:string){
    this.vetLoginDto = new VetLoginDto()
    this.vetLoginDto.ctor(email,password)


    this.store.dispatch({type: email})
    this.vetLoginService.getLogin(this.vetLoginDto).subscribe(data =>{this.state = data;
    if(!this.state){
      alert("Kullanıcı Adı Ve Şifre Yanlıştır");
    }else if(this.state){
      // this.router.navigate(['../vet-home-page/vet-meeting'])
      this.router.navigateByUrl('/vet-home-page')

    }})

  }

  vetDetailsRequest : VetDetailsRequest
  submitClick(firstName: string,
    lastName: string,
    email: string,
    password: string,
    city: string,
    country: String,
    branch: string ,
    hospital: string,
    adress: string){
      alert("Kaydınız Başarılı Bir Şekilde Oluşturulmuştur")
      this.vetDetailsRequest = new VetDetailsRequest(firstName,lastName,email,password,city,country,branch,hospital,adress);
      return this.vetLoginService.getCreate(this.vetDetailsRequest).subscribe(data => {this.vetDetailsRequest = data;console.log(data)})
    }
}
