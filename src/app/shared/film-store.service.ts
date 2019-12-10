import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Film } from './film';
import firestoreParser from 'firestore-parser';

@Injectable({
  providedIn: 'root'
})
export class FilmStoreService {
  private url = 'https://firestore.googleapis.com/v1/projects/filmlibrary-167373/databases/(default)/documents';

  constructor(private http: HttpClient) {}

  parseFirestoreEntry(firestoreEntry: any): Film {
    return firestoreParser(firestoreEntry['fields']);
  }

  getAll(): Observable<Film[]> {
    const params = new HttpParams ({ fromObject: { pageSize: '100' } });
    return this.http.get<object>(`${this.url}/films`, { params }).pipe(
      map((resultJson): any[] => resultJson['documents']),
      map(resultArray =>
        resultArray.map(arrayEntry => this.parseFirestoreEntry(arrayEntry))
      )
    );
  }

  getSingle(gtin: string): Observable<Film> {
    return this.http.get<any>(`${this.url}/films/${gtin}`).pipe(
      map(singleEntry => this.parseFirestoreEntry(singleEntry))
    );
  }
}
