import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { VetLoginDto } from 'src/app/dto/vet-login-dto';
import { LoginForUserBodyComponent } from '../login-for-user/login-for-user-body/login-for-user-body.component';
import { LoginForVetComponent } from '../login-for-vet/login-for-vet.component';

interface AppState{
  message: string;
}
@Component({
  selector: 'app-home-page-for-vet',
  templateUrl: './home-page-for-vet.component.html',
  styleUrls: ['./home-page-for-vet.component.css']
})
export class HomePageForVetComponent implements OnInit {

  message$ :Observable<String>;
  // alerts: Alert [] = []
  constructor(private store: Store<AppState>)
  { this.message$ = this.store.select('message')}

  vetLoginDto: VetLoginDto

  ngOnInit(): void {

  }
  alertMessage(){
    this.vetLoginDto = new VetLoginDto()


    console.log()
  }


}
