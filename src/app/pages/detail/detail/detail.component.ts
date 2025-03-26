import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
import { LineChartComponent } from 'src/app/charts/line-chart/line-chart.component';
import { LegendComponent } from 'src/app/legend/legend.component';

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
  selectedData: any[] = [];

  constructor() {}
  ngOnInit(): void {
    if (history.state.data) {
      this.selectedData = history.state.data;
      console.log(this.selectedData);
      
    } else {
      console.log("Aucune donnée trouvée");
    }
  }
}