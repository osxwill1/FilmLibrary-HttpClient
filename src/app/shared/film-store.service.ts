import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Film } from './film';

@Injectable({
  providedIn: 'root'
})
export class FilmStoreService {
  private url = 'https://firestore.googleapis.com/v1/projects/filmlibrary-167373/databases/(default)/documents';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Film[]> {
    return this.http.get<any[]>(`${this.url}/films`);
  }

  getSingle(gtin: string): Observable<Film> {
    return this.http.get<any>(`${this.url}/films/${gtin}`);
  }
}
