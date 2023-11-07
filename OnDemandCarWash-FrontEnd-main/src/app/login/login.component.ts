import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/User';
import Swal from 'sweetalert2';
import { faLockOpen } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  
  lock=faLockOpen;
  user1: User = new User();
  errorMessage: string = '';
  role:string = '';

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    var iterator = this.authenticationService.currentUserValue?.roles?.values();
    this.role = iterator?.next()?.value['role'];
    if (this.authenticationService.currentUserValue?.id) {
      console.log(this.authenticationService.currentUserValue?.id);
      this.router.navigate(['/home']);
      return;
    }
  }

  login() {
    this.authenticationService.login(this.user1).subscribe(
      (data) => {
        //Prompt
        Swal.fire(
          'Login Successful ',
          'You are logged in as ' + data.roles[0].role
        );
        
        if (data.roles[0].role === 'ADMIN') {
          this.router.navigate(['/admin']);
        } else if (data.roles[0].role === 'WASHER') {
          this.router.navigate(['/washer']);
        } else if (data.roles[0].role === 'USER') {
          this.router.navigate(['/user']);
        }
        console.log(data.roles[0].role);
      },
      (err) => {
        this.errorMessage = 'Username or password is incorrect.';
        console.log(err);
      }
    );
  }
}
