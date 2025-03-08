import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated = false;

  login(): void {
    this.isAuthenticated = true;
    localStorage.setItem("isAuthenticated", 'true');
  }

  logout(): void {
    this.isAuthenticated = false;
    localStorage.setItem("isAuthenticated", 'false');
  }

  isLoggedIn(): boolean {
    const isLoggedIn = localStorage.getItem("isAuthenticated");
    return isLoggedIn === 'true'
  }
}
