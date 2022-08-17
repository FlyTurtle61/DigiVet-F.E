import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserDetailsRequestModel } from 'src/app/dto/user-details-request';
import { userLoginDto } from 'src/app/dto/user-login-dto';
import { UserLoginService } from 'src/app/services/user-login-service/user-login.service';
interface AppState{
  message: string;
}
@Component({
  selector: 'app-login-for-user-body',
  templateUrl: './login-for-user-body.component.html',
  styleUrls: ['./login-for-user-body.component.css'],
  providers: [UserLoginService]
})

export class LoginForUserBodyComponent implements OnInit {

  message$ :Observable<String>;
  constructor(private userLoginService:UserLoginService,private store: Store<AppState>,private router: Router)
   { }
  ngOnInit(): void {

  }
  //private userLoginService:UserLoginService



  loginDto: userLoginDto;
  userDetailsDto : UserDetailsRequestModel;

  state: any;
  loginClick(email:any,password:any): any{

    this.loginDto = new userLoginDto()
    this.loginDto.ctor(email,password)
    this.store.dispatch({type: email})
   this.userLoginService.getLogin(this.loginDto).subscribe(data => {this.state = data;
if(!this.state){
  alert("Kullanıcı Adı veya Şifre yanlıştır Lütfen tekrar deneyiniz...")
}else{
  this.router.navigateByUrl('/user-home-page')

}
}  );



  }

  saveClick(firstName: any,
    lastName: any,
    email: any,
    password: any,
    city: any,
    country: any,
    adress: any){
      alert("kaydınız başarı ile oluşturulmuştur..")
      this.userDetailsDto = new UserDetailsRequestModel(firstName,lastName,email,password,city,country,adress)
      return this.userLoginService.getCreate(this.userDetailsDto).subscribe(data =>{this.userDetailsDto = data})
    }
    alertError()
    {
      alert('kullanıcı adınız veya şifre yanlıştır lütfen tekrar deneyiniz')
    }

}
