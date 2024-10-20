import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-accc',
  templateUrl: './accc.component.html',
  styleUrls: ['./accc.component.css']
})
export class AcccComponent {
  constructor(private authService: AuthService) {}

  // Méthode pour gérer le clic sur le bouton de déconnexion
  onLogout(): void {
    this.authService.logout();
}
}
