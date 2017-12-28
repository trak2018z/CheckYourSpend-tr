import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { AuthService } from './../../core/security/auth.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public username: string = '';
  public password: string = '';

  constructor(private router: Router, private authService: AuthService, private toastr: ToastrService) {}

  ngOnInit() {
    this.authService.userLogin.subscribe(result => {
      if (result) {
        this.router.navigate(['home']);        
      } else {
        this.router.navigate(['']);
      }
    });
  }

  login() {
    if (this.username !== null && this.password != null) {
      this.authService
        .login({ username: this.username, password: this.password })
        .subscribe(
          result => {
            this.authService.setToken(result.headers.get('authorization'));
          },
          error => {
            this.toastr.error("You can't log in", 'Login');
          }
        );
    }
  }

  signup(){
    this.router.navigate(['signup']);
  }

}
