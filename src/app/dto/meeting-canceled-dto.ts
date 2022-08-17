export class MeetingCanceledDto{
  id:any
  vetEmail: string
  userEmail: string
  description: string

  constructor(id:any,vetEmail:string,userEmail:string,description:string) {
    this.id = id
    this.vetEmail = vetEmail
    this.userEmail = userEmail
    this.description = description
  }
}
