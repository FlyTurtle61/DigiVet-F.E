export class VetDetailsUpdateModel{
  id: any;
  firstName: string
  lastName: string
  email: string
  password: string
  city: string
  country: String
  branch: string
  hospital: string
  adress: string
  constructor(
    id:any,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    city: string,
    country: String,
    branch: string ,
    hospital: string,
    adress: string
  ){
    this.id = id;
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.password = password
    this.city = city
    this.country = country
    this.branch = branch
    this.hospital = hospital
    this.adress =adress
  }
}
