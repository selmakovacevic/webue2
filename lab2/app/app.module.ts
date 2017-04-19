import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { AppComponent }         from './components/app.component';
import {HelloWorldComponent} from "./components/hello-world.component";
import {LoginComponent} from "./components/login.component";
import {RouterModule, Routes} from "@angular/router";
import {OverviewComponent} from "./components/overview.component";
import {OptionsComponent} from "./components/options.component";
import {DetailsComponent} from "./components/details.component";

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'options', component: OptionsComponent },
  { path: 'details', component: DetailsComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ChartsModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [
    AppComponent,
    HelloWorldComponent,
    LoginComponent,
    OverviewComponent,
      OptionsComponent,
      DetailsComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
