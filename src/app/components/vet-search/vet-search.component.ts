import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { Comments } from 'src/app/dto/comment';
import { createCommentDto } from 'src/app/dto/createCommentDto';
import { EmailDto } from 'src/app/dto/email-dto';
import { VetComentGetAllService } from 'src/app/services/vet-comment-get-all-services/vet-coment-get-all.service';
interface AppState{
  message: string;
}

@Component({
  selector: 'app-vet-search',
  templateUrl: './vet-search.component.html',
  styleUrls: ['./vet-search.component.css']
})

export class VetSearchComponent implements OnInit {
  message$ :Observable<String>;
  constructor(private commentService:VetComentGetAllService,private store: Store<AppState>)
  {this.message$ = this.store.select('message') }



  comments: Comment
  comment2: Comments[]

  emailState: String

  ngOnInit(): void {

    this.message$.subscribe(data => {this.emailState = data})
    var emailDto = new EmailDto(this.emailState.toString())

    this.commentService.getAll(emailDto).subscribe(data =>{this.comment2 = data})

  }
  vetEmail: String
  createComment(email:string,description:string){
    this.message$.subscribe(data => {this.vetEmail = data})

    let createComment = new createCommentDto(email,this.vetEmail.toString(),description,this.vetEmail.toString())

    alert("Yorum Yapılmıştır")

    return this.commentService.createComment(createComment).subscribe();

  }

}
