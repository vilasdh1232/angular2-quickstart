import { Component, Input  } from '@angular/core';
import { User }      from './../../models/user';
@Component({
  selector: 'app-register',
  template: `<div class="container">
    <h1>Register Form</h1>
    <form (ngSubmit)="getRegister()" >
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" class="form-control" id="username" name="username" [(ngModel)]="user.username" required #username="ngModel">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" id="password" name="password" [(ngModel)]="user.password" required  #password="ngModel">
      </div>
      <button type="submit" class="btn btn-default">Submit</button>
    </form>
</div>

    `
})
export class RegisterComponent {
   @Input()

  user: User = new User();

  getRegister(loginFrm) {
    console.log(this.user);
    console.log(loginFrm);
  }
}
