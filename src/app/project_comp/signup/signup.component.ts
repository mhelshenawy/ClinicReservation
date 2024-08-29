import { Component } from '@angular/core';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environments';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  constructor(private http: HttpClient, private router: Router) {}
  SignupUser = new User('', '', '', '', '');
  token: any;
  apiUrl: string = environment.apiUrl;

  Rejectiration(user: any) {
    console.log(user);
    this.http.post(this.apiUrl + '/api/v1/auth/signup', user).subscribe(
      (res: any) => {
        console.log(user);
        alert('Rejestered successfully');
        this.router.navigate(['login']);
      },
      (error) => {
        console.log('error happened');
      }
    );
  }
}
