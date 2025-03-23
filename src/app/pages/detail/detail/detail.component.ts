import { Component } from '@angular/core';
import { LineChartComponent } from 'src/app/charts/line-chart/line-chart.component';
import { LegendComponent } from 'src/app/legend/legend.component';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [LineChartComponent, LegendComponent],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {

}
