import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Comments } from 'src/app/dto/comment';
import { idDto } from 'src/app/dto/id-dto';
import { UserEmailDto } from 'src/app/dto/user-email-dto';
import { GetAllService } from 'src/app/services/get-all-vet-service/get-all.service';
interface AppState{
  message: string;
}
@Component({
  selector: 'app-admin-comment-managment',
  templateUrl: './admin-comment-managment.component.html',
  styleUrls: ['./admin-comment-managment.component.css']
})
export class AdminCommentManagmentComponent implements OnInit {

  message$ :Observable<String>;

  constructor(private commentService:GetAllService,private store: Store<AppState>)

   { this.message$ = this.store.select('message')}

   emailState: String

  userNameText: string
  comment: Comments[] = []
  ngOnInit(): void {
    this.commentService.getAllComment().subscribe(data => {this.comment = data})
  }

  deleteClick(id:any){

    let ids = new idDto(id)
    this.commentService.deleteComment(ids).subscribe()
    alert("Yorum Başarılı Bir Şekilde Silinmiştir :"+id)
    this.ngOnInit()
  }

}
