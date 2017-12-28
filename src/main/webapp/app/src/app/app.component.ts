import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/security/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  public isUserLogin: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.isUserLogin = !this.authService.isTokenExpired();
    this.authService.userLogin.subscribe(result => {
      console.log(result);
      this.isUserLogin = result;
    });
  }

  logout() {
    this.authService.deleteToken();
  }
}
