import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CountryData } from '../models/Olympic';

@Injectable({
  providedIn: 'root',
})
export class OlympicService {
  private olympicsCache: CountryData[]| null = null;

  constructor(private http: HttpClient) {}

  getOlympics(): Observable<CountryData[]> {
    if (this.olympicsCache) {
      return of(this.olympicsCache); 
    } else {
      return this.http.get<CountryData[]>('assets/mock/olympic.json').pipe(
        tap((data) => {
          if (Array.isArray(data)) {
            this.olympicsCache = data;
          } else {
            console.error("Les données reçues ne sont pas un tableau !");
          }
        })
      )}}}