import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SignInModule } from './sign-in.module';
import { SignupComponent } from './project_comp/signup/signup.component';
import { LoginComponent } from './project_comp/login/login.component';
import { DoctorComponent } from './project_comp/doctor/doctor.component';
import { PationtComponent } from './project_comp/pationt/pationt.component';

import { AuthInterceptorService } from './auth-interceptor-service';
import { UpdateComponent } from './project_comp/update/update.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    DoctorComponent,
    PationtComponent,
    UpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SignInModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
