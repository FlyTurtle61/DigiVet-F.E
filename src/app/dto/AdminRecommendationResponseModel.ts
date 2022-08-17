export class AdminRecommendationResponseModel{

    id:any
    reportedMail:string
    description:string
    status:string
    response:string
    /**
     *
     */
    constructor(id:any,
      reportedMail:string,
      description:string,
      status:string,
      response:string
      ) {
      this.id = id
      this.reportedMail = reportedMail
      this.description = description
      this.response = response
      this.status = status

    }


}
