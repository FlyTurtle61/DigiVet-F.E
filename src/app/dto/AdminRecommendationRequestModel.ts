export class AdminRecommendationRequestModel{
  id:any
  reportedMail:string
  description:string
  status:string

  /**
   *
   */
  constructor(id:any,
    reportedMail:string,
    description:string,

    status:string) {
    this.id = id
    this.reportedMail = reportedMail
    this.description = description

    this.status = status

  }
}
