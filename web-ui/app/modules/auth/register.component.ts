import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  template: `<div class="container">
    <h1>Register Form</h1>
    <form>
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" class="form-control" id="username" required>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" id="password">
      </div>
      <button type="submit" class="btn btn-default">Submit</button>
    </form>
</div>

    `
})
export class RegisterComponent {
  
}
