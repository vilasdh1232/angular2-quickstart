import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: ` <!-- Navigation -->
<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" [routerLink]="['/']">
                <i class="fa fa-home fa-3x" aria-hidden="true"></i>
            </a>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
                <li>
                    <a [routerLink]="['/schedules']"><i class="fa fa-calendar fa-3x" aria-hidden="true"></i></a>
                </li>
                <li>
                    <a [routerLink]="['/users']"><i class="fa fa-users fa-3x" aria-hidden="true"></i></a>
                </li>
                <li>
                    <a href="http://wp.me/p3mRWu-199" target="_blank"><i class="fa fa-info fa-3x" aria-hidden="true"></i></a>
                </li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <li>
                    <a href="https://www.facebook.com/chsakells.blog" target="_blank">
                        <i class="fa fa-facebook fa-3x" aria-hidden="true"></i>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/chsakellsBlog" target="_blank">
                        <i class="fa fa-twitter fa-3x" aria-hidden="true"></i>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/chsakell" target="_blank">
                        <i class="fa fa-github fa-3x" aria-hidden="true"></i>
                    </a>
                </li>
                <li>
                    <a href="https://chsakell.com" target="_blank">
                        <i class="fa fa-rss-square fa-3x" aria-hidden="true"></i>
                    </a>
                </li>
            </ul>
        </div>
        <!-- /.navbar-collapse -->
    </div>
    <!-- /.container -->
</nav>
<br/>

    `
})
export class HeaderComponent {
  
}
