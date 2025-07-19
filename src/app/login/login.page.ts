import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { AuthService } from '../services/auth.service';
import { firstValueFrom } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, 
              private router: Router, 
              private storage: Storage,
              private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  ngOnInit() {
    this.init();
  }

  async init() {
    await this.storage.create();
  }

  async login() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      // Simulación de login
      const result = await this.authService.login(email, password);
      console.log({result})
      if (result) {
        await this.storage.set('token', result);
        await this.storage.set('isLoggedIn', true);
        await this.storage.set('user', result.user);
        this.router.navigate(['/task/list']);
      } else {
        alert('Credenciales inválidas');
      }
    }
  }

}
