import { Component, Input  } from '@angular/core';
import { User }      from './../../models/user';


@Component({
  selector: 'app-login',
  template: `<div class="container">
    <h1>Login Form</h1>
    <form>
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" id="username" class="form-control"
              required minlength="4" maxlength="24"
              name="username" [(ngModel)]="user.username"             >

        <div *ngIf="username.errors && (username.dirty || username.touched)"
            class="alert alert-danger">
            <div [hidden]="!username.errors.required">
              Name is required
            </div>
            <div [hidden]="!username.errors.minlength">
              Name must be at least 4 characters long.
            </div>
            <div [hidden]="!username.errors.maxlength">
              Name cannot be more than 24 characters long.
            </div>
        </div>
      </div>
      <div class="form-group">
        <label for="alterEgo">Alter Ego</label>
        <input type="text" class="form-control" id="alterEgo">
      </div>
      <button type="submit" class="btn btn-default">Submit</button>
    </form>
</div>

    `
})
export class LoginComponent {
  @Input()

  user: User;
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.user); }

}
