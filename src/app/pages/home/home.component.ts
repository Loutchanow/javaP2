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

  constructor(private olympicService: OlympicService) {}

  ngOnInit(): void {
    this.olympicService.getOlympics().subscribe({
      next: (data) => {
        console.log(data);
        this.olympics = data;
        this.pieChartData = this.getPieChartData(data);
        console.log(this.pieChartData);
        
      },
      error: (err) => console.error('Erreur lors du chargement des JO:', err),
    });
  }

  cumulateMedalsCount(data: any[]): number {
    return data.reduce((total: number, participation: any) =>
      total + participation.medalsCount, 0
    );
  }

  getPieChartData(data: any[]): any[] {
    return data.map((olympic: any) => ({
      name: olympic.country,
      value: this.cumulateMedalsCount(olympic.participations),
    }));
  }
}
