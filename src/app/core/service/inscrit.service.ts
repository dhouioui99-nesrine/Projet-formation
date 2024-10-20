import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inscrit } from 'src/app/model/Inscrit.model';

@Injectable({
  providedIn: 'root'
})
export class InscritService {

  private baseURL = "http://localhost:8090/inscrit";

  constructor(private httpClient: HttpClient) { }
  
  getInscritList(): Observable<Inscrit[]>{
    return this.httpClient.get<Inscrit[]>(`${this.baseURL}`);
  }

  createInscrit(Inscrit: any , Formation: any): Observable<any> {
    return this.httpClient.post(this.baseURL, Inscrit);
  }

  
  getInscritById(id: any): Observable<Inscrit>{
    return this.httpClient.get<Inscrit>(`${this.baseURL}/${id}`);
  }

  updateInscrit(id: any, inscrit: Inscrit): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, Inscrit);
  }

  deleteInscrit(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }


  transferData(): Observable<any> {
    return this.httpClient.get(`${this.baseURL}/save`);
  }
}