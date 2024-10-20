import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAdmin()) {
      return true;  // L'utilisateur est admin, accès autorisé
    } else {
      this.router.navigate(['/home']);  // Redirection vers la page d'accueil
      return false;  // Accès refusé
    }
  }
}