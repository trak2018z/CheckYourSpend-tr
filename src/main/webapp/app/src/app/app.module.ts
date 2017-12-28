import { SignupService } from './core/service/signup.service';
import { AuthService } from './core/security/auth.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { AuthRequestOptions } from './core/security/auth-request';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './core/security/token-interceptor';
import { MaterialModule } from './core/material/material/material.module';
import { AppRoutingModule } from './core/routing/routes.module';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent, SignupComponent],
  imports: [AppRoutingModule, MaterialModule, FormsModule, HttpClientModule, ToastrModule.forRoot() ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    AuthService,
    SignupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
