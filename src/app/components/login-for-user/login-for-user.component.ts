import { Component, OnInit } from '@angular/core';
import { userLoginDto } from 'src/app/dto/user-login-dto';
import { UserLoginService } from 'src/app/services/user-login-service/user-login.service';

@Component({
  selector: 'app-login-for-user',
  templateUrl: './login-for-user.component.html',
  styleUrls: ['./login-for-user.component.css'],
  providers: [UserLoginService]
})
export class LoginForUserComponent implements OnInit {


  constructor() { }



  ngOnInit(): void {
  }


}
