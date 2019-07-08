import { Component } from "@angular/core";
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent {
    username;
    password;
    mouseoverLogin;
    loginInvalid = false;
    
    constructor(private authService:AuthService, private router:Router) {

    }

    login(formsValue) {
        this.authService.loginUser(formsValue.userName, formsValue.password)
            .subscribe(resp => {
                if (!resp) {
                    this.loginInvalid = true;
                } else {
                    this.router.navigate(['events']);
                }
            })
    }

    cancel() {
        this.router.navigate(['events']);
    }

}