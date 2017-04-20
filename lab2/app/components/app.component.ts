import {Component} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: '/app/views/root.html',
})

export class AppComponent {
    name: string = "World";
}


