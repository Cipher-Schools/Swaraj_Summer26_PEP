import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  baseUrl = 'https://api.themoviedb.org/3/';

  private http = inject(HttpClient);
  private header = new HttpHeaders({
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MjU4NjY4OTNjNjBiYTVjYmYwZTY3MThiZGQ2NzMxMCIsIm5iZiI6MTcwNzg1MDI2OC42MzEsInN1YiI6IjY1Y2JiYTFjOGM0NGI5MDE4MDk0MTc5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.58Z0EjNav96xzUihjLQLrt3VYxnBKsuYskFMiX-N51k',
  });

  get<T>(endpoint: string, params?: Record<string, string>): Observable<T> {
    const httpParams = new HttpParams({ fromObject: params || {} });

    return this.http.get<T>(`${this.baseUrl}${endpoint}`, {
      headers: this.header,
      params: httpParams,
    });
  }
}
