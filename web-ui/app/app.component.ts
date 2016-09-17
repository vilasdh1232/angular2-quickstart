import { Component } from '@angular/core';
debugger;
@Component({
    //moduleId: module.id,
    selector: 'my-app',
    //templateUrl: 'app/app.component.html',
    template: `<nav>
    <a routerLink="/crisis-center" routerLinkActive="active">Crisis Center</a>
    <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
</nav>
<router-outlet></router-outlet>
<app-footer></app-footer>`
})
export class AppComponent {

}
