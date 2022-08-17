import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
interface AppState{
  message: String;
}
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  message$ :Observable<String>;
  constructor(private store: Store<AppState>)
  { this.message$ = this.store.select('message')}

  ngOnInit(): void {
  }

}
