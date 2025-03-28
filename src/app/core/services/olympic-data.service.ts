import { Injectable } from '@angular/core';
import { CountryData, LineChartData, Participation, PieChartData } from '../models/Olympic';

@Injectable({
  providedIn: 'root',
})
export class OlympicDataService {
  constructor() {}

  // Nombre total de participations d'un pays
  getNumberOfParticipations(data: CountryData): number {
    return data.participations.length;
  }

  // Nombre total de pays participants
  getNumberOfCountries(data: CountryData[]): number {
    return data.length;
  }

  // Cumul du nombre de médailles d'un pays
  cumulateMedalsCount(data: Participation[]): number {
    return data.reduce((total, participation) => total + participation.medalsCount, 0);
  }

  // Cumul du nombre d'athlètes d'un pays
  cumulateAthletesCount(data: Participation[]): number {
    return data.reduce((total, participation) => total + participation.athleteCount, 0);
  }

  // Génère les données pour le Pie Chart
  sortPieChartData(data: CountryData[]): PieChartData[] {
    return data.map((country) => ({
      name: country.country,
      value: this.cumulateMedalsCount(country.participations),
    }));
  }

  // Génère les données pour le Line Chart d'un pays donné
  sortLineChartData(data: CountryData[], itemName: string): LineChartData[] {
    return data
      .filter((country) => country.country === itemName)
      .map((country) => ({
        name: country.country,
        series: country.participations.map((participation) => ({
          name: participation.year.toString(),
          value: participation.medalsCount,
        })),
      }));
  }

  // Récupère les données pour un pays sélectionné
  getSelectedCountryData(data: CountryData[], selectedCountry: string): CountryData[] {
    return data.filter((country) => country.country === selectedCountry);
  }
}
