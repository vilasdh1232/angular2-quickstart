import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  template: `
    <h1>{{title}}</h1>
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.username" placeholder="username">
    </div>
    `
})
export class RegisterComponent {
  
}
