import { Component, HostListener, Input } from '@angular/core';
import { NgxChartsModule, Color } from '@swimlane/ngx-charts';
import { LineChartData } from 'src/app/core/models/Olympic';
import { getResponsiveView } from 'src/app/utilis/utils';


@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  imports: [ NgxChartsModule],
  styleUrls: ['./line-chart.component.scss'],
  standalone: true,
})
export class LineChartComponent {
  @Input() multi: LineChartData[] = []; 
  
  view: [number, number] = [700, 400];

  legend: boolean = false;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Dates';
  timeline: boolean = false;
  colorScheme: Color = { domain: ['#bbd4eb ', '#89a1da ', '#793d52 ', '#956066 ', '#9881a0 ', '#81a1d9'] } as Color;


  constructor() {
    this.view = getResponsiveView();
  }
  
  @HostListener('window:resize')
  onResize() {
    this.view = getResponsiveView();
  }


}