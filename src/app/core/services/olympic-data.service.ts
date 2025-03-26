import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OlympicDataService {

  constructor() {}

  // Nombre total de participations d'un pays (Meme pour tous)
  getNumberOfParticipations(data: any): number {
    return data.participations.length;
  }

  // Nombre total de pays participants
  getNumberOfCountries(data: any[]): number {
    return data.length;
  }

  //  Cumul du nombre de médailles d'un pays
  cumulateMedalsCount(data: any[]): number {
    return data.reduce((total: number, participation: any) =>
      total + participation.medalsCount, 0
    );
  }

  //  Cumul du nombre d'athetes d'un pays
  cumulateAthletesCount(data: any[]): number {
    return data.reduce((total: number, participation: any) =>
      total + participation.athleteCount, 0
    );
  }

  //  Génére les données pour le Pie Chart
  sortPieChartData(data: any[]): any[] {
    return data.map((country: any) => ({
      name: country.country,
      value: this.cumulateMedalsCount(country.participations),
    }));
  }

  //  Génére les données pour le Line Chart d'un pays donné
  sortLineChartData(data: any[], itemName: string): any[] {
    return data
      .filter(country => country.country === itemName)
      .map(country => ({
        name: country.country,
        series: country.participations.map((participation: any) => ({
          name: participation.year.toString(), 
          value: participation.medalsCount
        }))
      }));
  }
  getSelectedCountryData(data: any[], selectedCountry: string): any[]{
    return data.filter((country: any) => country.country === selectedCountry)
  }
}