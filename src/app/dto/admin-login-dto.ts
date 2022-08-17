export class AdminLoginDto{
  adminEmail:string
  password:string
  /**
   *
   */
  constructor(adminEmail:string,password:string) {
    this.adminEmail = adminEmail
    this.password = password

  }
}
