import { Component, inject } from '@angular/core';
import { AuthService } from '../../common/services/auth.service';
import { Router } from '@angular/router';
import { EPagePath } from '../../common/models/base.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  authService = inject(AuthService);
  router = inject(Router);

  isEmailLogin = false;

  onLogin(): void {
    this.authService.login();
    this.router.navigate([EPagePath.requests]);
  }

  selectEmailLogin() {
    this.isEmailLogin = !this.isEmailLogin;
  }
}
