import { Component } from '@angular/core';
import { LineChartComponent } from 'src/app/charts/line-chart/line-chart.component';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [LineChartComponent],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {

}
