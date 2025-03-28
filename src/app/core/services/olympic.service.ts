import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class OlympicService {
  private olympicsCache: any = null;

  constructor(private http: HttpClient) {}

  getOlympics(): Observable<any> {
    if (this.olympicsCache) {
      return of(this.olympicsCache); 
    } else {
      return this.http.get<any>('assets/mock/olympic.json').pipe(
        tap((data) => (this.olympicsCache = data)) 
      );
    }
  }
}