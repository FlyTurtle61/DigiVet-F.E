export class MeetingModel{

  userFirstName: string;
  userLastName: string;
  vetFirstName: string;
  vetLastName: string;
  meetingType: string;
  meetingDate: string;
  vetEmail: string;
  userEmail: string;

  constructor(userFirstName:string,userLastName:string,vetFirstName:string,vetLastName:string,meetingType:string,meetingDate:string,vetEmail:string,userEmail:string){

    this.userFirstName = userFirstName;
    this.userLastName = userLastName;
    this.vetFirstName = vetFirstName;
    this.vetLastName =vetLastName;
    this.meetingType = meetingType;
    this.meetingDate = meetingDate;
    this.vetEmail = vetEmail;
    this.userEmail = userEmail;

  }

}
