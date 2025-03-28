import { Component, OnInit } from '@angular/core';
import { LineChartComponent } from 'src/app/common/charts/line-chart/line-chart.component';
import { LegendComponent } from 'src/app/common/legend/legend.component';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [LineChartComponent, LegendComponent],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})

export class DetailComponent implements OnInit {
  title: string = "Détails";
  selectedCountry: string = '';
  numberOfParticipations: number = 0;
  numberOfMedals: number = 0;
  numberOfAthletes: number = 0;
  selectedData: any[] = [];

  constructor() {}
  ngOnInit(): void {
    if (history.state) {
      this.selectedCountry = history.state.lineChartData[0].name
      this.title = this.selectedCountry;
      this.selectedData = history.state.lineChartData;
      console.log(this.selectedData);
      this.numberOfParticipations = history.state.legendData.numberOfParticipations;
      this.numberOfMedals = history.state.legendData.numberOfMedals;
      this.numberOfAthletes = history.state.legendData.numberOfAthletes;


    } else {
      console.log("Aucune donnée trouvée");
    }
  }
}