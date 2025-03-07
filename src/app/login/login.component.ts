import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';
import { StorageService } from '../core/service/storage.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;

  // public user!: UserDetails;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
    )
    {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }


  login() {
    console.log('this.loginForm.value ===== ', this.loginForm.value);
    const a = this.loginForm.value.email;
    this.authService.authenticate(this.loginForm.value).subscribe(
      async (response: any) => {
        if (response) {
          console.log("logged success response : ", response);
  
          // Redirection en fonction du rôle
          if (a === 'admin@gmail.com') {
            await this.router.navigate(['/acc']);  // Rediriger vers 'acc' pour admin
          } else {
            await this.router.navigate(['/homec']); // Rediriger vers 'home' pour user
          }
        } else {
          console.log("mochkel response : ", response);
        }
      },
      error => {
        console.error('mochkel login', error);
      }
    );
  }
  


  reloadPage(): void {
    this.router.navigate(['home']);
  }
}