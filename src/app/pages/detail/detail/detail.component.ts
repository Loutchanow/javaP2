import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LineChartComponent } from 'src/app/common/charts/line-chart/line-chart.component';
import { LegendComponent } from 'src/app/common/legend/legend.component';
import { HistoryState, LineChartData } from 'src/app/core/models/Olympic';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [LineChartComponent, LegendComponent, CommonModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})

export class DetailComponent implements OnInit {
  title: string = "Détails";
  selectedCountry: string = '';
  numberOfParticipations: number = 0;
  numberOfMedals: number = 0;
  numberOfAthletes: number = 0;
  selectedData: LineChartData[] = [];
  public noData: boolean = false;

  constructor() {}
  ngOnInit(): void {
    const state = history.state as HistoryState;

    if (state.lineChartData && state.lineChartData.length > 0 && state.legendData) {
      this.selectedCountry = state.lineChartData[0].name;
      this.title = this.selectedCountry;
      this.selectedData = state.lineChartData;
      this.numberOfParticipations = state.legendData.numberOfParticipations;
      this.numberOfMedals = state.legendData.numberOfMedals;
      this.numberOfAthletes = state.legendData.numberOfAthletes;
    } else {
      console.log("Aucune donnée trouvée");
      this.noData = true;
    }
  }
}