import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

const AUTH_API = 'http://localhost:8090/api/auth/';

/*const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};*/


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  withCredentials: true // Add this option
};
@Injectable({
  providedIn: 'root'
})


export class AuthService {
  private baseUrl = 'http://localhost:8090/api/auth';
  private role: string = '';
  private isLogin!: boolean;
  constructor(private http: HttpClient  , private router : Router) {
  }

 

  /*authenticate(data: any) {
    return this.http.post(`${this.baseUrl}/login`, data);

  }*/
  login(email: string, password: string): Observable<any> {
    this.isLogin = true;
    return this.http.post(
      AUTH_API + 'login',
      {
        email,
        password,
      },
      httpOptions
    );
  }

  // Méthode pour obtenir le rôle de l'utilisateur
  getRole(email: string): string {
    // Vérifiez si l'email est 'admin@gmail.com' et retournez le rôle approprié
    if (email === 'admin@gmail.com') {
      return 'admin';
    }
    return 'user'; // Retourne 'user' pour tous les autres cas
  }

  // Méthode pour vérifier si l'utilisateur est admin
  isAdmin(): boolean {
    return this.role === 'admin';
  }

  isAuthenticated(): boolean {
    const userDetails = localStorage.getItem('userDetails');
    
    if(userDetails !=null && localStorage.getItem("token")){
      this.isLogin = true;
    }
    
    return this.isLogin;
  }

  authenticate(data: any) {
    //this.isLogin = true;
    return this.http.post(`${this.baseUrl}/login`, data);
}
  getUserByEmail(email: string) {
    return this.http.get(`${this.baseUrl}/show-user-by-email/${email}`)
  }

  saveUserDetails(user: any): void {
    console.log('Saving user details:', user);
  
    // Vérification si 'user' et 'accessToken' existent
    if (user && user.accessToken) {
      // On suppose que l'email et le rôle sont fournis à partir d'autres sources ou par défaut
      const email = user.email || 'user@example.com';  // Valeur par défaut
      const role = (email === 'admin@gmail.com') ? 'admin' : 'user';  // Déterminer le rôle
  
      localStorage.setItem('userDetails', JSON.stringify({
        email: email,       // Stocker l'email de l'utilisateur
        role: role          // Stocker le rôle déterminé
      }));
  
      localStorage.setItem('token', user.accessToken);  // Utilisation de accessToken
    } else {
      console.error('User details or accessToken is missing:', user);
    }
  }
  
  
  getUserDetails(param: string) {
    const userDetails = localStorage.getItem('userDetails');

    if (userDetails) {
      const userDetailsParsed = JSON.parse(userDetails);
      if (param == "id") {
        return userDetailsParsed.id;
      } else if (param == "firstname") {
        return userDetailsParsed.firstname;
      }else if (param == "lastname") {
          return userDetailsParsed.lastname;
      } else if (param == "email") {
        return userDetailsParsed.email;
      } else if (param == "all") {
        return userDetailsParsed;
      } else {
        return "specify required details : id, username, email, all";
      }
    } else {
      return null;
    }
  }
  getDetails(){
    const userDetail = localStorage.getItem('userDetails');
    if(userDetail !==null)
    return JSON.parse(userDetail).other._id;
  }

  getDetailsname(){
    const userDetail = localStorage.getItem('userDetails');
    if(userDetail !==null)
    return JSON.parse(userDetail).other.fullname;
  }

  /*logout() {
    localStorage.removeItem('userDetails');
    localStorage.removeItem('token');
  }*/
    logout(): void {
      // Supprimer les informations d'authentification stockées dans localStorage
      localStorage.removeItem('role');
      localStorage.removeItem('token');  // Si vous utilisez un jeton JWT
  
      // Rediriger l'utilisateur vers la page de connexion ou d'accueil
      this.router.navigate(['/login']);
    }



  

  isLoggedIn() {
    const userDetails = localStorage.getItem('userDetails');
    return userDetails != null;
  }


  signup(firstname: string,lastname:String, email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signup',
      {
        firstname,
        lastname,
        email,
        password,
      },
      httpOptions
    );
  }






  getUserId(): string | null {
    return localStorage.getItem('userId');
  }
  

  setUserId(userId: string): void {
    localStorage.setItem('userId', userId);
  }

  // Méthode pour enregistrer le token
  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

 
}


