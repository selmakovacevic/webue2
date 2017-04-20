import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'login',
    templateUrl: '/app/views/login.html',
})

export class LoginComponent {
    user= "";
    password = "";

    constructor(
        private router: Router
    ){
    }

    onUserEnter(value: string) {
            this.user = value;
    }

    onPwdEnter(value: string) {
            this.password = value;
    }

    login() {
            if( this.user != "" && (this.password.length >= 4 && this.password.length <= 12))
                this.router.navigate(['/overview']);
    }
}