import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RecommendedDto } from 'src/app/dto/recommended';
import { UserRecommendedService } from 'src/app/services/user-recommended-service/user-recommended.service';
interface AppState{
  message: string;
}
@Component({
  selector: 'app-vet-recommended',
  templateUrl: './vet-recommended.component.html',
  styleUrls: ['./vet-recommended.component.css']
})
export class VetRecommendedComponent implements OnInit {


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
