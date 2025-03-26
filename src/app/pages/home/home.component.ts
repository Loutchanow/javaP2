import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OlympicService } from 'src/app/core/services/olympic.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public olympics: any = null;
  public pieChartData: any = null;
  public lineChartData: any = null;
  public numberOfParticipations: number = 0;
  public numberOfCountries: number = 0;
  itemClicked: string = "";
  selectedData: any[] = [];



  constructor(private router: Router, private route: ActivatedRoute, private olympicService: OlympicService) {}
  // constructor(private olympicService: OlympicService) {}

  ngOnInit(): void {
    this.olympicService.getOlympics().subscribe({
      next: (data) => {
        console.log(data);
        this.olympics = data;
        this.pieChartData = this.sortPieChartData(data);
        console.log(this.pieChartData);
        this.getNumberOfParticipations(data);
        this.getNumberOfCountries(data);
      },
      error: (err) => console.error('Erreur lors du chargement des JO:', err),
    });
    
  }
  getNumberOfParticipations(data: any[]): number {
    return this.numberOfParticipations = data[0].participations.length;
  }
  getNumberOfCountries(data: any[]): number {
    return this.numberOfCountries= data.length;
  }
  cumulateMedalsCount(data: any[]): number {
    return data.reduce((total: number, participation: any) =>
      total + participation.medalsCount, 0
  );
}
  sortPieChartData(data: any[]): any[] {
    return data.map((olympic: any) => ({
      name: olympic.country,
      value: this.cumulateMedalsCount(olympic.participations),
    }));
  }

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
  onItemClicked(itemName: string): void {
    this.itemClicked = itemName;
    this.selectedData = this.sortLineChartData(this.olympics, itemName);
    console.log(this.selectedData);
    this.router.navigate(['/details', itemName], { state: { data: this.selectedData } });
  }
}
