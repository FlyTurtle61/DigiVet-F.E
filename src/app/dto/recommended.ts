export class RecommendedDto{

  reportedMail:string
  description:string
  status:string
  /**
   *
   */
  constructor(reportedMail:string,description:string,status:string) {
    this.reportedMail = reportedMail
    this.description =description
    this.status = status

  }
}
