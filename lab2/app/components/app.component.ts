import {Component, NgModule} from '@angular/core';
import { HelloWorldComponent } from './hello-world.component';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: '/app/views/root.html'
})

@NgModule({
  declarations: [HelloWorldComponent],
  bootstrap:[HelloWorldComponent]
})
export class AppComponent {
  name: string = "World";
}


