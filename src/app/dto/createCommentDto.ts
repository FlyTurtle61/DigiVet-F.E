export class createCommentDto{
  id:any;
  userEmail: string;
  vetEmail: string;
  comment:any;
  date:any;
  createComment:string

  constructor(userEmail:string,vetEmail:string,comment:any, createComment:string){

    this.userEmail = userEmail,
    this.vetEmail = vetEmail,

    this.comment = comment
    this.createComment = createComment
  }
}
