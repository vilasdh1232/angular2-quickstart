import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
    <app-login></app-login>`
})
export class AppComponent {

    title = 'Angular2-Quickstart!';
}