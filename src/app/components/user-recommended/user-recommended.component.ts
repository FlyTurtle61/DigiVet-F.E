import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RecommendedDto } from 'src/app/dto/recommended';
import { reporterMail } from 'src/app/dto/reporter-email';
import { UserRecommendedService } from 'src/app/services/user-recommended-service/user-recommended.service';
interface AppState{
  message: string;
}
@Component({
  selector: 'app-user-recommended',
  templateUrl: './user-recommended.component.html',
  styleUrls: ['./user-recommended.component.css']
})
export class UserRecommendedComponent implements OnInit {

  message$ :Observable<String>;

  constructor(private recommendedService:UserRecommendedService,private store: Store<AppState>)

   { this.message$ = this.store.select('message')}

  ngOnInit(): void {
  }
  status:string ="TODO"
  emailState: String
  createClick(description:string){

    this.message$.subscribe(data => {this.emailState = data})

    let recommended = new RecommendedDto(this.emailState.toString(),description,this.status)
    alert("Mesajınız Gönderilmiştir")
    return this.recommendedService.getCreate(recommended).subscribe()
  }

}
