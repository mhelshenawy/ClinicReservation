import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environments';

interface loged {
  email: string;
  password: string;
  role: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private http: HttpClient, private router: Router) {}
  SigninUser: loged = { email: '', password: '', role: '' };
  obj: any;
  token: any;
  apiUrl: string = environment.apiUrl;

  Login(loguser: loged) {
    if (loguser.role == 'DOCTOR') {
      this.http.post(this.apiUrl + '/api/v1/auth/signin', loguser).subscribe(
        (res: any) => {
          localStorage.setItem('token', res.token);

          alert('loged in successfully');
          this.router.navigate(['doctor']);
        },
        (error) => {
          alert('error');
        }
      );
    } else if (loguser.role == 'PATIENT') {
      this.http.post(this.apiUrl + '/api/v1/auth/signin', loguser).subscribe(
        (res: any) => {
          localStorage.setItem('token', res.token);
          localStorage.setItem('pationt email', loguser.email);
          alert('loged in successfully');
          this.router.navigate(['pationt']);
        },
        (error) => {
          alert('error happand');
        }
      );
    }
  }
}
