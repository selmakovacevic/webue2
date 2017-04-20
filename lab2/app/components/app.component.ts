import {Component} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
        <div role="navigation" aria-label="jumplinks">
            <a href="#devicesheadline" class="accessibility">Zum Inhalt springen</a>
        </div>
        
        <header aria-labelledby="bannerheadline">
            <a routerLink="/overview"><img class="title-image" src="../../images/big-logo-small.png" alt="BIG Smart Home logo"></a>
        
            <h1 class="header-title" id="bannerheadline">
                BIG Smart Home
            </h1>
            <navigation></navigation>
        </header>
        <div class="main-container">
            <router-outlet></router-outlet>
        </div>
        <footer>
            © 2017 BIG Smart Home
        </footer>
        `,
})

export class AppComponent {

}


