import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/security/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  public isUserLogin: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.isUserLogin = !this.authService.isTokenExpired();
    this.authService.userLogin.subscribe(result => {
      if (result) {
        this.router.navigate(['home']);
      } else {
        this.router.navigate(['']);
      }
      this.isUserLogin = result;
    });
  }

  logout() {
    this.authService.deleteToken();
  }
}
