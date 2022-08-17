import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
interface AppState{
  message: string;
}
@Component({
  selector: 'app-home-page-for-user',
  templateUrl: './home-page-for-user.component.html',
  styleUrls: ['./home-page-for-user.component.css']
})
export class HomePageForUserComponent implements OnInit {

  message$ :Observable<String>;
  constructor(private store: Store<AppState>)
  {this.message$ = this.store.select('message') }

  ngOnInit(): void {
  }


}
