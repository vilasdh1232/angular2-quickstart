import { Component, Input  } from '@angular/core';
import { User }      from './../../models/user';


@Component({
  //moduleId: module.id,

  selector: 'app-login',
  templateUrl: 'app/modules/auth/login.component.html'
})
export class LoginComponent {
  @Input()

  user: User = new User();

  getLogin(loginFrm) {
    console.log(this.user);
    console.log(loginFrm);
  }


  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.user); }

}
