import { SignupService } from './core/service/signup.service';
import { AuthService } from './core/security/auth.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CurrencyMaskModule } from 'ng2-currency-mask';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { AuthRequestOptions } from './core/security/auth-request';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './core/security/token-interceptor';
import { MaterialModule } from './core/material/material/material.module';
import { AppRoutingModule } from './core/routing/routes.module';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DatePipe } from '@angular/common';
import { ChartManagerComponent } from './components/chart-manager/chart-manager.component';
import { ChartsBarVerticalComponent } from './components/chart-manager/charts/components/charts-bar-vertical/charts-bar-vertical.component';
import {
  SpendManagerComponent,
  SpendManagerDialogComponent
} from './components/spend-manager/spend-manager.component';
import {
  SpendDesingerComponent,
  SpendDesingerDialogComponent
} from './components/spend-manager/spend/components/spend-desinger/spend-desinger.component';
import { DialogManagerComponent } from './components/home/dialog-manager/dialog-manager.component';
import { LastSpendViewerComponent } from './components/last-spend-viewer/last-spend-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ChartManagerComponent,
    ChartsBarVerticalComponent,
    SpendManagerComponent,
    SpendManagerDialogComponent,
    SpendDesingerComponent,
    SpendDesingerDialogComponent,
    DialogManagerComponent,
    LastSpendViewerComponent
  ],
  entryComponents: [
    SpendManagerDialogComponent,
    SpendDesingerDialogComponent,
    DialogManagerComponent
  ],
  imports: [
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgxChartsModule,
    CurrencyMaskModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    AuthService,
    SignupService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
