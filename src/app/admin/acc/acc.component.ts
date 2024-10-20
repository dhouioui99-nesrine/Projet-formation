import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-acc',
  templateUrl: './acc.component.html',
  styleUrls: ['./acc.component.css']
})
export class AccComponent {
  constructor(private authService: AuthService) {}

  // Méthode pour gérer le clic sur le bouton de déconnexion
  onLogout(): void {
    this.authService.logout();
}
}
