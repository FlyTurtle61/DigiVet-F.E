export class Comments{
  id:any;
  userEmail: string;
  vetEmail: string;
  comment:any;
  date:any;
  createComment:string

  constructor(id:any,userEmail:string,vetEmail:string,comment:any,date:any,createComment:string){
    this.id = id;
    this.userEmail = userEmail,
    this.vetEmail = vetEmail,
    this.date = date,
    this.comment = comment
    this.createComment = createComment
  }
}
