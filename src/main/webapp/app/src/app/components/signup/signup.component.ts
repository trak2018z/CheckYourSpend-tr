import { ToastrService } from 'ngx-toastr';
import { SignupService } from './../../core/service/signup.service';
import { Component, OnInit } from '@angular/core';
import { AccountCredentialsDto } from './model/account-credentials-dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public accountCredentialsDto: AccountCredentialsDto = new AccountCredentialsDto();

  constructor(
    private router: Router,
    private signupService: SignupService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {}

  createAccount() {
    if (
      this.accountCredentialsDto.username.length > 0 &&
      this.accountCredentialsDto.password.length > 0 &&
      this.accountCredentialsDto.repeatedPassword ===
        this.accountCredentialsDto.password
    ) {
      this.signupService.signup(this.accountCredentialsDto).subscribe(
        result => {
          this.toastr.success('You can log in now', 'SignUp');
          this.router.navigate(['']);
        },
        error => {
          this.toastr.error("You can't sign up", 'SignUp');
        }
      );
    }
  }
}
