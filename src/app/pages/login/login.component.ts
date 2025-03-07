import { Component, inject } from '@angular/core';
import { AuthService } from '../../common/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  authService = inject(AuthService);
  router = inject(Router);

  onLogin(): void {
    this.authService.login();
    this.router.navigate(['/employees']);
  }
}
