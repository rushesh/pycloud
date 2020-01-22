import{ Injectable } from'@angular/core';

@Injectable()
export class GlobalUser {
  public emailid = null;

  constructor() {}

  setUserLoggedInEmail(emailid) {
    this.emailid = emailid;
    console.log(this.emailid);
  }

  getUserLoggedIn() {
    console.log(this.emailid);
    return this.emailid;
  }

}