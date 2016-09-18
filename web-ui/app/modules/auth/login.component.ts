import { Component, Input  } from '@angular/core';
import { User }      from './../../models/user';


@Component({
  selector: 'app-login',
  template: `<div class="container">
    <h1>Login Form</h1>
    <form (ngSubmit)="getLogin()" >
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" class="form-control" id="username" name="username" [(ngModel)]="user.username" required #username="ngModel" minlength="2" maxlength="20">
        <div *ngIf="username.errors && (username.dirty || username.touched)"
            class="alert alert-danger">
            <div [hidden]="!username.errors.required">
              Username is required
            </div>
            <div [hidden]="!username.errors.minlength">
              Username must be at least 4 characters long.
            </div>
            <div [hidden]="!username.errors.maxlength">
              Username cannot be more than 24 characters long.
            </div>
        </div>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" id="password" name="password" [(ngModel)]="user.password" required  #password="ngModel">
        <div *ngIf="username.errors && (password.dirty || password.touched)"
            class="alert alert-danger">
            <div [hidden]="!password.errors.required">
              Password is required
            </div>            
        </div>
      </div>
      <button type="submit" class="btn btn-default">Submit</button>
    </form>
</div>

    `
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
