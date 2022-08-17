import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { adminCreateModel } from 'src/app/dto/admin-create-model';
import { CreateAdminService } from 'src/app/services/create-admin-service/create-admin.service';
interface AppState{
  message: string;
}
@Component({
  selector: 'app-create-admin',
  templateUrl: './create-admin.component.html',
  styleUrls: ['./create-admin.component.css']
})
export class CreateAdminComponent implements OnInit {

  message$ :Observable<String>;

  constructor(private createService:CreateAdminService,private store: Store<AppState>)

   { this.message$ = this.store.select('message')}

  ngOnInit(): void {
  }

  submitClick(name:string,password:string,email:string){
    let adminCreate = new adminCreateModel(name,email,password);
    alert("Ekleme işlemi Tamamlandı")
    return this.createService.getAll(adminCreate).subscribe()

  }

}
