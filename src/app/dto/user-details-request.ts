export class UserDetailsRequestModel{
  firstName: string
  lastName: string
  email: string
  password: string
  city: string
  country: string
  adress: string

  constructor(firstName: string,lastName: string,email: string,password: string,city: string,country: string,adress: string){
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.password = password
    this.city = city
    this.country = country
    this.adress = adress

  }
}
