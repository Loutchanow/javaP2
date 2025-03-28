import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OlympicService } from 'src/app/core/services/olympic.service';
import { OlympicDataService } from 'src/app/core/services/olympic-data.service';
import { CountryData, LineChartData, PieChartData } from 'src/app/core/models/Olympic';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public olympics: CountryData[] = [];
  public pieChartData: PieChartData[] = [];
  public lineChartData: LineChartData[] = [];
  public numberOfParticipations: number = 0;
  public selectedCountryData: CountryData[] = [];
  public selectedCountryNumberOfMedals: number = 0;
  public selectedCountryNumberOfAthletes: number = 0;
  public numberOfCountries: number = 0;
  public itemClicked: string = '';
  public selectedData: LineChartData[] = [];


  constructor(private router: Router, private olympicService: OlympicService, private olympicDataService: OlympicDataService ) {}

  ngOnInit(): void {
      if (this.olympics.length === 0) {
      this.olympicService.getOlympics().subscribe({
        next: (data: CountryData[]) => {
          console.log(data);
          this.olympics = data;
          this.numberOfParticipations = this.olympicDataService.getNumberOfParticipations(data[0]);
          this.pieChartData = this.olympicDataService.sortPieChartData(data);
          this.numberOfCountries = this.olympicDataService.getNumberOfCountries(data);
          console.log(this.pieChartData);
        },
        error: (err) => console.error('Erreur lors du chargement des JO:', err),
      });
    }
  }


  onItemClicked(itemName: string): void {
      this.itemClicked = itemName;
      this.selectedCountryData = this.olympicDataService.getSelectedCountryData(this.olympics, itemName)
      this.selectedCountryNumberOfMedals = this.olympicDataService.cumulateMedalsCount(this.selectedCountryData[0].participations)
      this.selectedCountryNumberOfAthletes = this.olympicDataService.cumulateAthletesCount(this.selectedCountryData[0].participations)
      this.selectedData = this.olympicDataService.sortLineChartData(this.olympics, itemName);
      console.log(this.selectedData);
      this.router.navigate(['/details', itemName], {
        state: {
          lineChartData: this.selectedData,
          legendData: {
            numberOfParticipations: this.numberOfParticipations,
            numberOfMedals: this.selectedCountryNumberOfMedals,
          },
            numberOfAthletes: this.selectedCountryNumberOfAthletes,
        },
      });
  }
}