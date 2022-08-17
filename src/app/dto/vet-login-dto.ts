
export class VetLoginDto{
  email:string;
  password:string;
  /**
   *
   */
   constructor() {


  }

  ctor(email:string,password:string){
    this.email = email;
    this.password = password;


  }
  getEmail(){

    return this.email
  }
}
