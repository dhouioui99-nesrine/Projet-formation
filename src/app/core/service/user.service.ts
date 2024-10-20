import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {UserModel} from "../../model/User.model";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";
const API_URL = 'http://localhost:8090/api/users';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8090/api/users';
  loggedUserId = this.authService.getUserDetails("id");
  constructor(private http: HttpClient, private authService:AuthService) { }


  getAll(): Observable<any> {
    return this.http.get(API_URL, { responseType: 'text' });
  }

  

 /* findById(idUser: string | undefined) {
    return this.http.get<UserModel>(`${this.baseUrl}/${idUser}`);
  }

  createUser(UserForm: any) {
    return this.http.post<UserModel>(`${this.baseUrl}/create`, UserForm);
  }

  updateUser(idUser: any ,UserForm: any) {
    return this.http.put<UserModel>(`${this.baseUrl}/${idUser}`, UserForm);

  }*/


    updateUser(id: any, user: UserModel): Observable<Object>{
      return this.http.put(`${this.baseUrl}/${id}`, user);
    }
  

  deleteUserById(id: string | undefined) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getuserList(): Observable<UserModel[]>{
    return this.http.get<UserModel[]>(`${this.baseUrl}`);
  }


  /*createUser(user: UserModel): Observable<Object>{
    return this.http.post(`${this.baseUrl}`, user);
  }*/

  getUserById(id: any): Observable<UserModel>{
    return this.http.get<UserModel>(`${this.baseUrl}/${id}`);
  }



  deleteUser(id: any): Observable<Object>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
