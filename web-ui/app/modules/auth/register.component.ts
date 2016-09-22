import { Component, Input  } from '@angular/core';
import { User }      from './../../models/user';
@Component({
  //moduleId: module.id,

  selector: 'app-register',
  templateUrl: 'app/modules/auth/register.component.html'

})
export class RegisterComponent {
  @Input()

  user: User = new User();

  getRegister(loginFrm) {
    console.log(this.user);
    console.log(loginFrm);
  }
}
