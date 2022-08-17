export class adminCreateModel{
  fullName: string
  adminEmail: string
  password: string

  /**
   *
   */
  constructor(fullName: string,adminEmail: string,password: string) {
    this.fullName = fullName
    this.adminEmail = adminEmail
    this.password = password

  }
}
