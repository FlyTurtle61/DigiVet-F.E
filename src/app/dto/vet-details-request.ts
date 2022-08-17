export class VetDetailsRequest{
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
